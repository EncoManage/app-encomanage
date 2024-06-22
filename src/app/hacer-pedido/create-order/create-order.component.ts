import { Component } from '@angular/core';
import { OrderRequest } from '../model/order-request.model';
import { OrderService } from '../../services/order.service';
import { Router } from '@angular/router';
import { N } from '@angular/cdk/keycodes';

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
  orders: OrderRequest[] = [];
  newOrder: OrderRequest = {
    shipping_address: '',
    pickup_address: '',
    express_shipping: false,
    tipo_encomienda: ''
  };
  onSelectEncomienda():void{
    console.log('Seleccionar Tipo de Encomienda clicado');
    this.router.navigate(['/hacer-pedido/seleccionar-encomienda']);
  }
  selectedOrder: OrderRequest | null = null;
  instrucciones: string = '';

  onToggleExpressShipping(): void{
    this.order.express_shipping=!this.order.express_shipping;
    this.checkFormValidity();
    console.log('Envio Express activado: ', this.order.express_shipping);
  }
  ngOnInit(): void {
    this.order = this.orderService.getOrder();
    
    this.orders = [
      {
        shipping_address: '',
        pickup_address: '',
        express_shipping: false,
        tipo_encomienda: ''
      },
    ];
  }
  checkFormValidity(): void {
    this.isFormValid = !!this.order.pickup_address && !!this.order.shipping_address && !!this.order.tipo_encomienda;
  }

  onSubmitOrder(): void{
    this.orderService.setOrder(this.order);
    this.addOrder();
    console.log('Pedido creado: ', this.order);
    this.router.navigate(['/hacer-pedido/order-confirmation']);
  }
  onInstruccionesEntrega() {
    this.router.navigate(['/hacer-pedido/instrucciones-entrega']);
  }
  addOrder() {
    this.newOrder = {
      shipping_address: this.order.shipping_address,
      pickup_address: this.order.pickup_address,
      express_shipping: this.order.express_shipping,
      tipo_encomienda: this.order.tipo_encomienda 
    };
    this.orderService.addOrder(this.newOrder);
    this.orders = this.orderService.getOrders(); // Refresh the list
    this.newOrder = {
      shipping_address: '',
      pickup_address: '',
      express_shipping: false,
      tipo_encomienda: 'z' 
    }; // Reset the form
  }
  onSelectOrder(order: OrderRequest): void {
    this.selectedOrder = order;
    this.instrucciones = this.orderService.getInstrucciones();
    
  }

}
