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
import { NavscanComponent } from './pages/navscan/navscan.component';
import { RouterModule } from '@angular/router';
import {IonicStorageModule} from '@ionic/storage-angular';
import { RegisterModule } from './modules/register/register.module';
import { CommonModule } from '@angular/common';
import { HistorialScanComponent } from './pages/historial-scan/historial-scan.component';
import { HistorialScanModule } from './pages/historial-scan/historial-scan.module';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { DataLocalService } from './services/data-local.service';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    UserRegisterComponent,
    NavscanComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    provideFirebaseApp(()=> initializeApp(firebaseConfig)),
    provideAuth(()=> getAuth()),
    IonicStorageModule.forRoot(),
    RouterModule
  ],
  providers: [BarcodeScanner,InAppBrowser,DataLocalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
