import { Routes, RouterModule } from '@angular/router';

import { ChatRoomComponent } from './chat-room.component';
import { CreateRoomComponent } from './create-room/create-room.component';
import { RoomComponent } from './room/room.component';
import { ChatRoomGuard } from './chat-room.guard.service';

export const AppRoutes: Routes = [
    { path: 'rooms', component: ChatRoomComponent, canActivate: [ChatRoomGuard] },
    { path: 'rooms/create', component: CreateRoomComponent, canActivate: [ChatRoomGuard] },
    { path: 'rooms/:key', component: RoomComponent, canActivate: [ChatRoomGuard] }
];