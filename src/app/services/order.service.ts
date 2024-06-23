import { Injectable } from '@angular/core';
import { OrderRequest } from '../hacer-pedido/model/order-request.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private apiUrl = 'http://localhost:3000/orders';

  private orders: OrderRequest[] = [];
  private instruccionesAr: string[] = [];


  private order: OrderRequest = {
    shipping_address: '',
    pickup_address: '',
    express_shipping: false,
    tipo_encomienda: '',
    price: 0
  };

  private instrucciones: string = '';
  private randomValue: number = Math.floor(Math.random() * 100) + 1;

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

  setPrice(price: number) {
    this.order.price = price;
  }

  getPrice(): number {
    return this.order.price;
  }

  calculatePrice(expressShipping: boolean): number {
    let basePrice = 0;

    if (this.order.tipo_encomienda === 'Mudanza') {
      basePrice = 500 + this.randomValue;
    } else if (this.order.tipo_encomienda === 'Encomienda de comida') {
      basePrice = 20 + this.randomValue;
    } else if (this.order.tipo_encomienda === 'Encomienda regular') {
      basePrice = 20 + this.randomValue;
    }

    if (expressShipping) {
      basePrice += 20; // Añadir 20 soles si el envío exprés está activado
    }

    this.order.price = basePrice;
    return basePrice;
  }

  createOrder(order: OrderRequest): Observable<OrderRequest> {
    return this.http.post<OrderRequest>(this.apiUrl, order);
  }
 
  addOrder(order: OrderRequest) {
    this.orders.push(order);
  }
  getOrderss(): OrderRequest[] {
    return this.orders;
  }
  getInstruccionesAr(): string[]{
    return this.instruccionesAr;
  }
  
  getOrderDetails(index: number): OrderRequest | null {
    return this.orders[index] || null;
  }
  getOrderCount(): number {
    return this.orders.length;
  }
  addInstruccion(instruccion: string) {
    this.instruccionesAr.push(instruccion);

  }
}
