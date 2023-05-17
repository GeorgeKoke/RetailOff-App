import { Component} from '@angular/core';
import { RegisterModule } from 'src/app/modules/register/register.module';
import { DataLocalService } from 'src/app/services/data-local.service';

@Component({
  selector: 'app-historial-scan',
  templateUrl: './historial-scan.component.html'
})
export class HistorialScanComponent{
  constructor(public dataLocal: DataLocalService){}

  ngOnInit() {
  }

  openRegister(register:RegisterModule){
    console.log('Registro', register);
    this.dataLocal.openRegister(register);
  }

}
