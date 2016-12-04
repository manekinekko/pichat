import { Component, OnInit } from '@angular/core';
import { ChatRoomService } from './chat-room.service';
import { SessionService } from '../shared/session.service';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss']
})
export class ChatRoomComponent implements OnInit {

  rooms = [];
  isLoading = true;

  constructor(
    private cr: ChatRoomService,
    private ss: SessionService
  ) {
  }

  ngOnInit() {
    this.ss.setPageTitle('Chat Rooms');
    this.cr.getRooms().subscribe( rooms => {
      this.rooms = rooms;
      this.isLoading = false;
    });
  }

}
