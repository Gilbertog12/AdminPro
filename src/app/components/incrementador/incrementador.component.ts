import { Component, OnInit, Input, Output,EventEmitter, ViewChild, ElementRef } from '@angular/core';



@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress: ElementRef;

  @Input('valor') porcentaje : number = 50;
  @Input('nombre') leyenda : string = 'Leyenda';

  @Output()  cambioValor:EventEmitter<number> = new EventEmitter();

  constructor() { 

    console.log('Leyenda' , this.leyenda);
    console.log('porcentaje' , this.porcentaje);
  }

  ngOnInit(): void {

    console.log('Leyenda' , this.leyenda);
    console.log('porcentaje' , this.porcentaje);
  }

  onChanges( newValue: number ) {

    // let elemHTML: any = document.getElementsByName('porcentaje')[0];

    // console.log( this.txtProgress );

    if ( newValue >= 100 ) {
      this.porcentaje = 100;
    }else if ( newValue <= 0 ) {
      this.porcentaje = 0;
    }else {
      this.porcentaje = newValue;
    }

    // elemHTML.value = this.porcentaje;
    this.txtProgress.nativeElement.value = this.porcentaje;

    this.cambioValor.emit( this.porcentaje );

  }

  CambiarValor(valor){

    if(this.porcentaje >=100 && valor > 0){
      this.porcentaje = 0;
      return;
    }

    if(this.porcentaje <=0 && valor< 0){
      this.porcentaje = 100;
      return;
    }

    this.porcentaje = this.porcentaje + valor;

    this.cambioValor.emit( this.porcentaje );

    this.txtProgress.nativeElement.focus();


  }

}
