import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-de-envios',
  templateUrl: './lista-de-envios.component.html',
  styleUrl: './lista-de-envios.component.css'
})
export class ListaDeEnviosComponent {
  constructor(private Router:Router){}

  irAlMenu() {
    this.Router.navigate(['/historial-de-pedidos/historial-menu']);
  }
}
