import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Retail-App-v2';
  public appPages =[
    {title: 'Home', url: '/home', icon: 'home'},
    {title: 'Dashboard', url: '/dashboard', icon: 'pie-chart'},
    {title: 'Login', url: '/login', icon: 'log-in'},
    {title: 'Register', url: '/user-register', icon: 'person-add'},
  ];
  constructor(){}
}
