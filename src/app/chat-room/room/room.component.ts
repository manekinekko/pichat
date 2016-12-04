import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ChatRoomService } from '../chat-room.service';
import { SessionService } from '../../shared/session.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {

  room = {};
  messages = [];
  newMessage = '';
  roomKey;
  isLoading = true;

  constructor(
    private cr: ChatRoomService,
    private ss: SessionService,
    private ar: ActivatedRoute,
    private rt: Router
  ) { }

  ngOnInit() {
    this.roomKey = this.ar.snapshot.params['key'];
    const roomAndMessages = this.cr.getRoomAndMessages(this.roomKey)
    
    roomAndMessages.messages.subscribe( messages => {
      this.messages = messages;
      this.scrollToLast();
    });
    roomAndMessages.room.subscribe( room => {
      if (room) {
        this.room = room;
        this.isLoading = false;
        this.ss.setPageTitle(`Room: ${ room.roomName }`);
      }
      else {
        this.rt.navigate(['/rooms']);
      }
    });
  }

  send() {
    this.cr.addMessage(this.roomKey, {
      user: this.ss.getUser(),
      text: this.newMessage,
      date: +(new Date())
    });
    this.newMessage = '';
    this.scrollToLast();
  }

  isMyMessage(message) {
    return message.user.email === this.ss.getUser().email;
  }

  scrollToLast() {
    setTimeout( _ => window.scrollBy(0, Math.pow(10,99)), 10);
  }

}
