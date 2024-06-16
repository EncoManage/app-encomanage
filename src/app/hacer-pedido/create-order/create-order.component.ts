import { Component } from '@angular/core';
import { OrderRequest } from '../model/order-request.model';
import { OrderService } from '../../services/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrl: './create-order.component.css'
})
export class CreateOrderComponent {
  order:OrderRequest;
  isFormValid: boolean = false;

  constructor(private orderService: OrderService, private router: Router) {
    this.order = this.orderService.getOrder();
  }

  onSelectEncomienda():void{
    console.log('Seleccionar Tipo de Encomienda clicado');
    this.router.navigate(['/hacer-pedido/seleccionar-encomienda']);
  }

  onToggleExpressShipping(): void{
    this.order.express_shipping=!this.order.express_shipping;
    this.checkFormValidity();
    console.log('Envio Express activado: ', this.order.express_shipping);
  }

  checkFormValidity(): void {
    this.isFormValid = !!this.order.pickup_address && !!this.order.shipping_address && !!this.order.tipo_encomienda;
  }

  onSubmitOrder(): void{
    this.orderService.setOrder(this.order);
    console.log('Pedido creado: ', this.order);
    this.router.navigate(['/hacer-pedido/order-confirmation']);
  }
  onInstruccionesEntrega() {
    this.router.navigate(['/hacer-pedido/instrucciones-entrega']);
  }
}
