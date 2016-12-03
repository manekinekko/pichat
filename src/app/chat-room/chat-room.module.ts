import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { ChatRoomComponent } from './chat-room.component';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { AppRoutes } from './chat-room.routes';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(AppRoutes)
  ],
  declarations: [ChatRoomComponent, RoomsListComponent]
})
export class ChatRoomModule { }
