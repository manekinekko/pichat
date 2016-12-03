import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Injectable()
export class SessionService {

  session;

  constructor(private af: AngularFire) {
    this.af.auth.subscribe( session => {
      console.log(session);
      this.session = session;
    });
  }

  getAuth() {
    return this.af.auth;
  }

  getUser() {
    return this.session.google;
  }

}
