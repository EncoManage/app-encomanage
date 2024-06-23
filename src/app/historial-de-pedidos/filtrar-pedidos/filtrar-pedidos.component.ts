import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { OrderRequest } from '../../hacer-pedido/model/order-request.model';
import { Z } from '@angular/cdk/keycodes';
@Component({
  selector: 'app-filtrar-pedidos',
  templateUrl: './filtrar-pedidos.component.html',
  styleUrl: './filtrar-pedidos.component.css'
})
export class FiltrarPedidosComponent {
  constructor(private Router: Router, private orderService: OrderService){
    this.order = this.orderService.getOrder();
    this.orders = this.orderService.getOrders();
    
  }
  ngOnInit(): void {
     // this.order = this.orderService.getOrder();
   // this.orders = this.orderService.getOrders();
  }
  orders: OrderRequest[] = [];
  order: OrderRequest | null = null;
  selectedOrder: OrderRequest | null = null;
  
  
  sortAalaZ(): void {
    //this.orders.sort();
    this.orders.sort((a, b) => a.pickup_address.localeCompare(b.pickup_address));
    console.log("Sorted orders (false first):", this.orders);
    this.Router.navigate(['/historial-de-pedidos/lista-actualizada']);
  }

  sortInvertirLista(): void {
    this.orders.reverse();
    console.log("Sorted orders (true first):", this.orders);
    this.Router.navigate(['/historial-de-pedidos/lista-actualizada']);
  }
}
