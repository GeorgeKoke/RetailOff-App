import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UserRegisterComponent } from './pages/user-register/user-register.component';
import { NavscanComponent } from './pages/navscan/navscan.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'user-register',
    component: UserRegisterComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'navscan',
    component: NavscanComponent,
    children:[
      {
        path:'',
        pathMatch:'full',
        redirectTo: 'scan',
      },
      {
        path:'scan',
        loadChildren:()=> import('./pages/scan/scan.module').then((m)=>m.ScanModule),
      },
      {
        path:'historial-scan',
        loadChildren:()=> import('./pages/historial-scan/historial-scan.module').then((m)=>m.HistorialScanModule),
      },
      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
