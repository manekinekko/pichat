import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { ChatRoomService } from '../chat-room.service';
import { SessionService } from '../../shared/session.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {

  messages;
  newMessage;
  roomKey;

  constructor(
    private cr: ChatRoomService,
    private ss: SessionService,
    private ar: ActivatedRoute
  ) { }

  ngOnInit() {
    this.roomKey = this.ar.snapshot.params['key'];
    this.messages = this.cr.getRoom(this.roomKey);
  }

  send() {
    this.cr.addMessage(this.roomKey, {
      user: this.ss.getUser(),
      text: this.newMessage,
      date: +(new Date())
    });
    this.newMessage = '';
    window.scrollBy(0, Math.pow(10,99))
  }

  isMyMessage(message) {
    return message.user.email === this.ss.getUser().email;
  }

}
