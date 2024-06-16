import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instrucciones-entrega',
  templateUrl: './instrucciones-entrega.component.html',
  styleUrl: './instrucciones-entrega.component.css'
})
export class InstruccionesEntregaComponent {
 instrucciones: string="";

 constructor(private router: Router) {}

 guardarInstrucciones() {
  console.log('Instrucciones guardadas:', this.instrucciones);
    // Guardar instrucciones en localStorage o algún servicio
  localStorage.setItem('instrucciones', this.instrucciones);
  this.router.navigate(['/hacer-pedido/seleccionar-encomienda'])
 }
}
