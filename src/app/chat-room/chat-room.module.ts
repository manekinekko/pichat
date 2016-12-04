import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';  

import { ChatRoomComponent } from './chat-room.component';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { ChatRoomService } from './chat-room.service';
import { ChatRoomGuard } from './chat-room.guard.service';
import { CreateRoomComponent } from './create-room/create-room.component';
import { RoomComponent } from './room/room.component';
import { AppRoutes } from './chat-room.routes';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    RouterModule.forChild(AppRoutes),
    SharedModule
  ],
  providers: [
    ChatRoomService,
    ChatRoomGuard
  ],
  declarations: [ChatRoomComponent, RoomsListComponent, CreateRoomComponent, RoomComponent]
})
export class ChatRoomModule { }
