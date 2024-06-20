import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-filtrar-pedidos',
  templateUrl: './filtrar-pedidos.component.html',
  styleUrl: './filtrar-pedidos.component.css'
})
export class FiltrarPedidosComponent {
  constructor(private Router: Router){}

  irFiltrarPorFecha() {
    this.Router.navigate(['/historial-de-pedidos/lista-actualizada']);
  }
  irFiltrarPorTipo() {
    this.Router.navigate(['/historial-de-pedidos/lista-actualizada']);
  }

}
