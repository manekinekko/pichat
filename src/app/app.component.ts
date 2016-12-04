import { Component, OnInit } from '@angular/core';
import { SessionService } from './shared/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title;

  constructor(private ss: SessionService) { 
    this.ss.getPageTitle().subscribe( title => this.title = title);
  }

  ngOnInit() {
    this.ss.setPageTitle('Welcome to Pichat');
  }
}
