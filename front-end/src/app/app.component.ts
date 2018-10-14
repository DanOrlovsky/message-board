import { Component } from '@angular/core';
import { NavComponent } from './nav.component';
import { HomeComponent } from './home.component';
@Component({
  selector: 'app-root',
  template: `
      <nav></nav>
      <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor() {}

}
