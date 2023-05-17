import { Injectable, Inject } from '@angular/core';
import { RegisterModule } from '../modules/register/register.module';
import { Storage } from '@ionic/storage-angular';
import { NavController } from '@ionic/angular';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {
  saved: RegisterModule[] = [];

  constructor(
    private storage: Storage,
    private navCtrl: NavController,
    private inAppBrowser: InAppBrowser) {
      this.loadStorage();
    }
    async ngOnInit(){
      
    }
  
    async loadStorage(){
      await this.storage.create();
      this.saved = (await this.storage.get('registros') || [])
    }
    async saveRegister(format: string, text:string){
      await this.loadStorage();

      const newRegister = new RegisterModule(format, text);
      this.saved.unshift(newRegister);

      console.log(this.saved);
      this.storage.set('registros', this.saved);
      this.openRegister(newRegister);

    }
    openRegister(register:RegisterModule){
      this.navCtrl.navigateForward('/navscan/historial-scan');

      switch(register.type){
        case 'http':
          this.inAppBrowser.create(register.text, '_system');
          break;
        case 'geo':
          this.navCtrl.navigateForward(`/navscan/historial-scan/map/${register.text}`);
          break;
      }
    }
  
  
}
