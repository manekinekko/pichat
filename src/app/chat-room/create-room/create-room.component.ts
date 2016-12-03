import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ChatRoomService } from '../chat-room.service';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.scss']
})
export class CreateRoomComponent implements OnInit {

  constructor(
    private cr: ChatRoomService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  create(roomName) {
    const ref = this.cr.addRoom(roomName);
    this.router.navigate(['/rooms/', ref.key]);
  }

}
