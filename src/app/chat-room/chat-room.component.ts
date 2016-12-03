import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss']
})
export class ChatRoomComponent implements OnInit {

  rooms = [{
    name: 'room 1'
  }, {
    name: 'room 1'
  }, {
    name: 'room 1'
  }, {
    name: 'room 1'
  }, {
    name: 'room 1'
  }];

  constructor() { }

  ngOnInit() {
  }

}
