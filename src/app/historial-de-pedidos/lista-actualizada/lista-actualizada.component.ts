import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-actualizada',
  templateUrl: './lista-actualizada.component.html',
  styleUrl: './lista-actualizada.component.css'
})
export class ListaActualizadaComponent {
  constructor(private Router: Router){

  }
  irAlMenu() {
    this.Router.navigate(['/historial-de-pedidos/historial-menu']);
  }
}
