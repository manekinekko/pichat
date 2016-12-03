import { Routes, RouterModule } from '@angular/router';

import { RoomsListComponent } from './rooms-list/rooms-list.component';

export const AppRoutes: Routes = [
    { path: 'rooms', component: RoomsListComponent }
];