import { Injectable, EventEmitter } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Injectable()
export class SessionService {

  session = null;
  title;

  constructor(private af: AngularFire) {
    this.af.auth.subscribe( session => {
      this.session = session;
    });

    this.title = new EventEmitter<string>();
  }

  getPageTitle() {
    return this.title;
  }

  setPageTitle(newTitle: string) {
    this.title.emit(newTitle);
  }

  getAuth(): any {
    return this.af.auth;
  }

  getUser() {
    return this.session.google;
  }

  isLoggedIn() {
    return this.session !== null;
  }

}
