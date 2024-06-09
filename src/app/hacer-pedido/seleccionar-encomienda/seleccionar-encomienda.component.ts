import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seleccionar-encomienda',
  templateUrl: './seleccionar-encomienda.component.html',
  styleUrl: './seleccionar-encomienda.component.css'
})



export class SeleccionarEncomiendaComponent {

  constructor(private router: Router) {}

  selectEncomienda(tipoEncomienda: string) {
    console.log(`Tipo de Encomienda seleccionado: ${tipoEncomienda}`);
  }
  onInstruccionesEntrega() {
    this.router.navigate(['/hacer-pedido/instrucciones-entrega']);
  }
}
