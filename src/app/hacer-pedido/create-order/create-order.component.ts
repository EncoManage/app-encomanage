import { Component } from '@angular/core';
import { OrderRequest } from '../model/order-request.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrl: './create-order.component.css'
})
export class CreateOrderComponent {
  order:OrderRequest={
    shipping_address: '',
    pickup_address: '',
    express_shipping: false
  };

  constructor(private router: Router) {}

  onSelectEncomienda():void{
    console.log('Seleccionar Tipo de Encomienda clicado');
    this.router.navigate(['/hacer-pedido/seleccionar-encomienda']);
  }

  onToggleExpressShipping(): void{
    this.order.express_shipping=!this.order.express_shipping;
    console.log('Envio Express activado: ', this.order.express_shipping);
  }

  onSubmitOrder(): void{
    console.log('Pedido creado: ', this.order);
  }
  onInstruccionesEntrega() {
    this.router.navigate(['/hacer-pedido/instrucciones-entrega']);
  }
}
