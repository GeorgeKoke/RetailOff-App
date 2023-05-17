import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { MapComponent } from "./map.component";
import { CommonModule } from "@angular/common";

@NgModule({
    imports:[IonicModule,CommonModule,RouterModule.forChild([{path:'', component: MapComponent}])],
    declarations:[MapComponent],
    exports: [MapComponent],
})
export class MapModule {}