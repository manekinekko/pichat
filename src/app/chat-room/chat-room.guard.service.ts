import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SessionService } from '../shared/session.service';

@Injectable()
export class ChatRoomGuard implements CanActivate {

  constructor(
    private ss: SessionService,
    private rt: Router
  ) {}

  canActivate() {
    if (this.ss.isLoggedIn()) {
      return true;
    }
    this.rt.navigate(['/home']);
    return false;
  }
}