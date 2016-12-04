import { Component, OnInit } from '@angular/core';
import { SessionService } from '../shared/session.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  session;

  constructor(private ss: SessionService) { }

  ngOnInit() {
  }

  onLogin(session: any) {
    this.session = session;
  }

  onLogout() {
    this.session = null;
  }

}
