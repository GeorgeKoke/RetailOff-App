import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UserRegisterComponent } from './pages/user-register/user-register.component';
import { IonicModule } from '@ionic/angular';

import firebaseConfig from 'src/environments/firebase';
import {provideFirebaseApp, initializeApp, getApp} from '@angular/fire/app' ;
import {getAuth, provideAuth} from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
import { HistorialScanComponent } from './pages/historial-scan/historial-scan.component';
import { ScanComponent } from './pages/scan/scan.component';
import { MapComponent } from './pages/map/map.component';
import { NavscanComponent } from './pages/navscan/navscan.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    UserRegisterComponent,
    HistorialScanComponent,
    ScanComponent,
    MapComponent,
    NavscanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    provideFirebaseApp(()=> initializeApp(firebaseConfig)),
    provideAuth(()=> getAuth()),
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
