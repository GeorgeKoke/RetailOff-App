import { Inject, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class RegisterModule { 
  public format: string;
  public text: string;
  public type: string;
  public icon: string;
  public created: Date;

  constructor(@Inject(String)format: string, @Inject(String)text:string){
    this.format = format;
    this.text = text;
    this.type = '';
    this.icon ='';
    this.created = new Date();
    this.defineType();
  }

  private defineType(){
    const inicoTexto = this.text.substring(0,4);
    console.log('TIPO', inicoTexto);
    switch(inicoTexto){
      case 'http':
        this.type = 'http';
        this.icon = 'globe';
        break;
      case 'geo':
        this.type = 'geo';
        this.icon = 'location';
        break;
      
        default:
          this.type = 'No Reconocido';
          this.icon = 'create';
          break;
    }
  }

}
