import { Component, OnInit } from '@angular/core';
import { ChatRoomService } from './chat-room.service';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss']
})
export class ChatRoomComponent implements OnInit {

  rooms = [];

  constructor(private cr: ChatRoomService) {
  }

  ngOnInit() {
    this.cr.getRooms().subscribe(
      rooms => this.rooms = rooms
    );
  }

}
