import { Component } from '@angular/core';
import { DataLocalService } from 'src/app/services/data-local.service';
import {BarcodeScanner} from '@awesome-cordova-plugins/barcode-scanner/ngx';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html'
})
export class ScanComponent {

  constructor(
    private barcodeScanner: BarcodeScanner,
    private dataLocal: DataLocalService){}

  scan(){
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      if(!barcodeData.cancelled){
        this.dataLocal.saveRegister(barcodeData.format,barcodeData.text);
      }
    }).catch(err =>{
      console.log('Error', err);
      this.dataLocal.saveRegister('QRCode', 'geo:40.73151796986687, -74.06087294062502');
    });
  }
}
