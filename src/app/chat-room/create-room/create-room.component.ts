import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ChatRoomService } from '../chat-room.service';
import { SessionService } from '../../shared/session.service';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.scss']
})
export class CreateRoomComponent implements OnInit {

  constructor(
    private cr: ChatRoomService,
    private router: Router,
    private ss: SessionService
  ) { }

  ngOnInit() {
  }

  create(formValue) {
    const ref = this.cr.addRoom({
      room: {
        name: formValue.roomName
      },
      author: this.ss.getUser()
    });
    this.router.navigate(['/rooms/', ref.key]);
  }

}
