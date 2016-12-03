import { Routes, RouterModule } from '@angular/router';

import { ChatRoomComponent } from './chat-room.component';
import { CreateRoomComponent } from './create-room/create-room.component';
import { RoomComponent } from './room/room.component';

export const AppRoutes: Routes = [
    { path: 'rooms', component: ChatRoomComponent },
    { path: 'rooms/create', component: CreateRoomComponent },
    { path: 'rooms/:key', component: RoomComponent },
];