import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { OrderService } from '../../services/order.service';
import { OrderRequest } from '../../hacer-pedido/model/order-request.model';

@Component({
  selector: 'app-historial-menu',
  templateUrl: './historial-menu.component.html',
  styleUrl: './historial-menu.component.css',
  
})
export class HistorialMenuComponent {
  constructor(private Router:Router, private orderService: OrderService, private route: ActivatedRoute){ }
  order: OrderRequest | null = null;
  selectedOrder: OrderRequest | null = null;
  resetOrder(){

  }
  irFiltrarPedidos() {
    this.Router.navigate(['/historial-de-pedidos/filtrar-pedidos']);
  }
  irDetallesDelEnvio() {
    this.Router.navigate(['/historial-de-pedidos/detalles-del-envio']);
  }
  irListaDeEnvios() {
    this.Router.navigate(['/historial-de-pedidos/lista-de-envios']);
  }
  ngOnInit(): void {
    const index = +this.route.snapshot.paramMap.get('index')!;
    this.order = this.orderService.getOrderDetails(index);
    this.order = this.orderService.getOrder();
  }
  getTheOrder():void{
    this.order = this.orderService.getOrder();
  }
}
