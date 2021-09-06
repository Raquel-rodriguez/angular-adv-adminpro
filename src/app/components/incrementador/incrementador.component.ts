import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
// import * as EventEmitter from 'node:events';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit{
  ngOnInit(){
    this.btnClass =`btn ${this.btnClass}`;
  }
  
  @Input('valor') progreso: number = 50;  // Con @input ya saben que desde el padre puede recibir una variable llamada progreso. Lo que va entre parentesis es el nombre que tiene en el padre, se renombra
  @Input() btnClass: string = 'btn-primary';

  @Output('valor') valorSalida: EventEmitter<number> = new EventEmitter(); //Evento



  cambiarValor(valor: number) {
    this.progreso = this.progreso + valor;
    if (this.progreso >= 100 && valor > 0) {
      this.valorSalida.emit(100);
      return this.progreso = 100;
    } else if (this.progreso <= 0 && valor < 0) {
      this.valorSalida.emit(0);

      return this.progreso = 0;
    } else{
      this.progreso =this.progreso + valor;
      this.valorSalida.emit(this.progreso);

    }
  }
  onChange(nuevoValor: number) {
    if(nuevoValor >=100){
      this.progreso = 100;
    } else if (nuevoValor <= 0){
      this.progreso = 100;
    }else{
      this.progreso = nuevoValor;
    }
    this.valorSalida.emit(this.progreso);
  }
}
