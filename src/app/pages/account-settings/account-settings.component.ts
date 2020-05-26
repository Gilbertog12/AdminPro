import { Component, OnInit ,  Inject} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SettingsService } from '../../services/service.index';


@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {
 
  
  constructor(  public _ajustes:SettingsService) { }

  ngOnInit(): void {

    this.colocarcheck();
  }

  cambiarcolor(tema : string , link :any){
    console.log(tema)

    this.aplicarcheck(link)

    this._ajustes.aplicarTema(tema);
    
  }

  aplicarcheck( link : any){

    let selectores : any = document.getElementsByClassName('selector');

    for(let ref of selectores){
      ref.classList.remove('working')
    }

    link.classList.add('working');


  }

  colocarcheck(){


    let selectores : any = document.getElementsByClassName('selector');

    let tema = this._ajustes.Ajustes.tema;

    for(let ref of selectores){
      ref.classList.remove('working')

      if( ref.getAttribute('data-theme') === tema){

        ref.classList.add('working');
        break;
      }
    }

  }
}
