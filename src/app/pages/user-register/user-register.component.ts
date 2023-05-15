import { Component, Inject } from '@angular/core';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
})
export class UserRegisterComponent {
  private auth: Auth = Inject(Auth);

  name: string="";
  username: string="";
  email: string="";
  password: string="";
  cpassword: string="";

  constructor(
    public afAuth: Auth,
    public app: AppComponent,
    public route: Router
  ){}

  ngOnInit(){}

  async register(){
    const {username, email,password,cpassword} = this
    if(password !== cpassword){
      this.app.showAlert("Error", "Las contraseñas no coinciden")
    }else{
      try{
        const res = await createUserWithEmailAndPassword(this.afAuth,email,password);
        this.app.showAlert("Usuario Registrado", `Bienvenido ${username}, ya puedes iniciar sesion`);
        this.route.navigate(['login'])
      }catch(err){
        console.dir(err);
        if(typeof err === 'string'){
          this.app.showAlert("Error", err);
        }else if(err instanceof Error){
          this.app.showAlert("Error", err.message);
        }
      }
    }
  }
}
