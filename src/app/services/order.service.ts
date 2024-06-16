import { Injectable } from '@angular/core';
import { OrderRequest } from '../hacer-pedido/model/order-request.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
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
}
