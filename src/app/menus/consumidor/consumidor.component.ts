import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-consumidor',
  templateUrl: './consumidor.component.html',
  styleUrl: './consumidor.component.css'
})
export class ConsumidorComponent {
  
  constructor(private Router: Router) { }

  newShipment(): void{
    this.Router.navigate(['/hacer-pedido/create-order'])
  }

  activeShipments(): void{
    this.Router.navigate(['/hacer-pedido/create-order'])
  }

  shipmentRecord(): void{
    this.Router.navigate(['/historial-de-pedidos/historial-menu'])
  }
}