import { Component } from '@angular/core';

@Component({
  selector: 'app-instrucciones-entrega',
  templateUrl: './instrucciones-entrega.component.html',
  styleUrl: './instrucciones-entrega.component.css'
})
export class InstruccionesEntregaComponent {
 instrucciones: string="";

 guardarInstrucciones() {
  console.log('Instrucciones guardadas:', this.instrucciones);
 }
}
