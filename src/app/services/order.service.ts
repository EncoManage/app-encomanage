import { Injectable } from '@angular/core';
import { OrderRequest } from '../hacer-pedido/model/order-request.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orders: OrderRequest[] = [];

  private order: OrderRequest = {
    shipping_address: '',
    pickup_address: '',
    express_shipping: false,
    tipo_encomienda: ''
  };

  private instrucciones: string = '';
  
  setOrder(order: OrderRequest) {
    this.order = order;
  }

  getOrder(): OrderRequest {
    return this.order;
  }

  setInstrucciones(instrucciones: string) {
    this.instrucciones = instrucciones;
  }

  getInstrucciones(): string {
    return this.instrucciones;
  }
  addOrder(order: OrderRequest) {
    this.orders.push(order);
  }
  getOrders(): OrderRequest[] {
    return this.orders;
  }
  
  getOrderDetails(index: number): OrderRequest | null {
    return this.orders[index] || null;
  }
  getOrderCount(): number {
    return this.orders.length;
  }
}
