import { Component } from '@angular/core';

@Component({
  selector: 'app-seleccionar-encomienda',
  templateUrl: './seleccionar-encomienda.component.html',
  styleUrl: './seleccionar-encomienda.component.css'
})
export class SeleccionarEncomiendaComponent {
  selectEncomienda(tipoEncomienda: string) {
    console.log(`Tipo de Encomienda seleccionado: ${tipoEncomienda}`);
  }
}
