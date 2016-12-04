import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  session;

  constructor() { }

  ngOnInit() {
  }

  onLogin(session: any) {
    this.session = session;
  }

  onLogout() {
    this.session = null;
  }

}
