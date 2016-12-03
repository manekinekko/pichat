import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { AppRoutes } from './home.routes';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(AppRoutes)
  ],
  declarations: [HomeComponent, LoginComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
