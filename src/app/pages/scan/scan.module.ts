import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { ScanComponent } from "./scan.component";
import { BarcodeScanner } from "@awesome-cordova-plugins/barcode-scanner/ngx";

@NgModule({
    imports:[IonicModule,RouterModule.forChild([{path:'', component: ScanComponent}])],
    declarations:[ScanComponent],
    exports: [ScanComponent],
})
export class ScanModule {}