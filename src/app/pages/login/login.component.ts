import { Component, Inject } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  private auth: Auth = Inject(Auth);
  email: string="";
  password: string="";

  constructor(
    public afAuth: Auth,
    public app: AppComponent,
    public route: Router
  ){}

  ngOnInit(){}

  async login(){
    const{email,password} = this;
    try {
      const res = await signInWithEmailAndPassword(this.afAuth,email,password);
      this.route.navigate(['dashboard'])
    } catch (err) {
      console.dir(err);
      if(err instanceof Error){
        switch(err.message){
          case 'Firebase: Error (auth/wrong-password).':
            this.app.showAlert("Error:", "Contraseña Incorrecta")
            break;
          case 'Firebase: Error (auth/user-not-found).':
            this.app.showAlert("Error:", "Email Incorrecto o no existe")
            break;
          case 'Firebase: Error (auth/invalid-email).':
            this.app.showAlert("Error:", "El email está en blanco o escrito de forma Incorrecta")
            break;
          default:{
            this.app.showAlert("Error:", err.message)
            break;
          }
        }
      }
    }
  }
}
