import { Routes, RouterModule } from '@angular/router';

import { ChatRoomComponent } from './chat-room.component';

export const AppRoutes: Routes = [
    { path: 'rooms', component: ChatRoomComponent }
];