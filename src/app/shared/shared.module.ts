import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';

import { SessionService } from './session.service';
import { CameraService } from './camera/camera.service';
import { CameraComponent } from './camera/camera.component';

@NgModule({
  providers: [
    SessionService,
    CameraService
  ],
  imports: [
    MaterialModule
  ],
  declarations: [CameraComponent],
  exports: [CameraComponent]
})
export class SharedModule { }
