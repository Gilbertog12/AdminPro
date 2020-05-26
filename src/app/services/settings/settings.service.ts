import { Injectable, Inject } from '@angular/core';
import { stringify } from 'querystring';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

 Ajustes: Ajustes = {
   temaUrl: 'assets/css/colors/default.css',
   tema: 'default'
 };

  constructor(@Inject(DOCUMENT) private _document) {
    this.cargar_ajustes();
    

   }

   guardarAjustes(){
    localStorage.setItem('Ajustes', JSON.stringify(this.Ajustes));
  }

  cargar_ajustes(){

    if(localStorage.getItem('Ajustes'))
    {
      this.Ajustes = JSON.parse(localStorage.getItem('Ajustes'))

      this.aplicarTema(this.Ajustes.tema )
    }else{
      console.log('valor por defecto');
    }

    
  }

  aplicarTema(tema:string){

    let url = `assets/css/colors/${ tema }.css`
    this._document.getElementById('tema').setAttribute('href', url)

    this.Ajustes.tema = tema;
    this.Ajustes.temaUrl = url;

    this.guardarAjustes();

  }

  
}
interface Ajustes {

  temaUrl:string;
  tema:string;

}
