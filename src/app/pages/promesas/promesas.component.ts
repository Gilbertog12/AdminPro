import { Component, OnInit } from '@angular/core';
import { promise } from 'protractor';
import { resolve } from 'dns';
import { rejects } from 'assert';
import { interval } from 'rxjs';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.scss']
})
export class PromesasComponent implements OnInit {

  constructor() { 

    

    this.contar3().then(
      (mensaje)=>{
        console.log("Termino!"+ mensaje)
      }
    ).catch( (error)=>{
      console.error("Error en la promesa " + " " + error);

    }
    )

  }

  ngOnInit(): void {


  }

  contar3() :Promise<boolean>{

    return new Promise(( resolve, reject) =>{

      let contador = 0;

      let intervalo = setInterval(()=>{
        contador +=1;
      console.log(contador)

        if(contador == 3){
          resolve(true);
          clearInterval(intervalo)
        }
      },1000);
    })

    
    
  }

}
