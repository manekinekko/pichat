import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  session: any = null;

  @Output() onLogin: EventEmitter<any>;
  @Output() onLogout: EventEmitter<any>;

  constructor(private af: AngularFire) { 
    this.af.auth.subscribe( session => {
      
      if(session) {
        this.onLogin.emit(session);
      }
      else {
        this.onLogout.emit();
      }
      
      this.session = session;
    });

    this.onLogin = new EventEmitter<any>();
    this.onLogout = new EventEmitter<any>();
  }

  ngOnInit() {
  }

  login() {
    this.af.auth.login();
  }

  logout() {
    this.af.auth.logout();
  }

}
