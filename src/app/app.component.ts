import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

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
    {title: 'NavScan', url: '/navscan', icon: 'scan'},
  ];
  constructor(
    public alertController: AlertController,
    public route: Router
  ){}

  async showAlert(header:string, message:string){
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK']
    });
    await alert.present();
  }
}
