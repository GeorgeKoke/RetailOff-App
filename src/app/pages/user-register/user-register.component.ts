import { Component, Inject } from '@angular/core';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AlertController, IonicModule } from '@ionic/angular';

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
    public alertController: AlertController,
    public route: Router
  ){}

  ngOnInit(){}

  async register(){
    const {username, email,password,cpassword} = this
    if(password !== cpassword){
      this.showAlert("Error", "Las contraseñas no coinciden")
    }else{
      try{
        const res = await createUserWithEmailAndPassword(this.afAuth,email,password);
        this.showAlert("Usuario Registrado", `Bienvenido ${username}, ya puedes iniciar sesion`);
        this.route.navigate(['login'])
      }catch(err){
        console.dir(err);
        if(typeof err === 'string'){
          this.showAlert("Error", err);
        }else if(err instanceof Error){
          this.showAlert("Error", err.message);
        }
      }
    }
  }

  async showAlert(header:string, message:string){
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK']
    });
    await alert.present();
  }
}
