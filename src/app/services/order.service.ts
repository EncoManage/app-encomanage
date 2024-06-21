import { Injectable } from '@angular/core';
import { OrderRequest } from '../hacer-pedido/model/order-request.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = 'http://localhost:3000/orders';

  private order: OrderRequest = {
    shipping_address: '',
    pickup_address: '',
    express_shipping: false,
    tipo_encomienda: ''
  };
  private instrucciones: string = '';

  constructor(private http: HttpClient) {}

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

  getOrders(): Observable<OrderRequest[]> {
    return this.http.get<OrderRequest[]>(this.apiUrl);
  }

  createOrder(order: OrderRequest): Observable<OrderRequest> {
    return this.http.post<OrderRequest>(this.apiUrl, order);
  }
}
