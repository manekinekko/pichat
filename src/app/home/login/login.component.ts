import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SessionService } from '../../shared/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  session: any = null;

  @Output() onLogin: EventEmitter<any>;
  @Output() onLogout: EventEmitter<any>;

  constructor(private ss: SessionService) { 

    this.onLogin = new EventEmitter<any>();
    this.onLogout = new EventEmitter<any>();
  }

  ngOnInit() {
    this.ss.getAuth().subscribe( session => {
      
      if(session) {
        this.onLogin.emit(session);
      }
      else {
        this.onLogout.emit();
      }
      
      this.session = session;
    });
  }

  login() {
    this.ss.getAuth().login();
  }

  logout() {
    this.ss.getAuth().logout();
  }

}
