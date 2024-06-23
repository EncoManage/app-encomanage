import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { OrderRequest } from '../../hacer-pedido/model/order-request.model';
import { Z } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-filtrar-pedidos',
  templateUrl: './filtrar-pedidos.component.html',
  styleUrls: ['./filtrar-pedidos.component.css']
})
export class FiltrarPedidosComponent implements OnInit {
  orders: OrderRequest[] = [];
  order: OrderRequest | null = null;
  selectedOrder: OrderRequest | null = null;

  constructor(private router: Router, private orderService: OrderService) {}

  ngOnInit(): void {
    this.fetchOrders();
  }

  fetchOrders(): void {
    this.orderService.getOrders().subscribe((orders: OrderRequest[]) => {
      this.orders = orders;
    }, error => {
      console.error('Error al obtener las órdenes:', error);
    });
  }

  sortAalaZ(): void {
    this.orderService.getOrders().subscribe((orders: OrderRequest[]) => {
      this.orders = orders.sort((a, b) => a.pickup_address.localeCompare(b.pickup_address));
      console.log("Sorted orders (A-Z):", this.orders);
      this.router.navigate(['/historial-de-pedidos/lista-actualizada']);
    }, error => {
      console.error('Error al obtener las órdenes:', error);
    });
  }

  sortInvertirLista(): void {
    this.orderService.getOrders().subscribe((orders: OrderRequest[]) => {
      this.orders = orders.reverse();
      console.log("Sorted orders (Z-A):", this.orders);
      this.router.navigate(['/historial-de-pedidos/lista-actualizada']);
    }, error => {
      console.error('Error al obtener las órdenes:', error);
    });
  }
}
