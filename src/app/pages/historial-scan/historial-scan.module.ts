import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { HistorialScanComponent } from "./historial-scan.component";
import { CommonModule } from "@angular/common";

@NgModule({
    imports:[IonicModule,CommonModule,RouterModule.forChild([{path:'', component: HistorialScanComponent}])],
    declarations:[HistorialScanComponent],
    exports: [HistorialScanComponent],
})
export class HistorialScanModule {}