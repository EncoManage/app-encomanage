import { Router } from '@angular/router';
import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-historial-menu',
  templateUrl: './historial-menu.component.html',
  styleUrl: './historial-menu.component.css',
  
})
export class HistorialMenuComponent {
  constructor(private Router:Router){ }


  irFiltrarPedidos() {
    this.Router.navigate(['/historial-de-pedidos/filtrar-pedidos']);
  }
  irDetallesDelEnvio() {
    this.Router.navigate(['/historial-de-pedidos/detalles-del-envio']);
  }
  irListaDeEnvios() {
    this.Router.navigate(['/historial-de-pedidos/lista-de-envios']);
  }
}
