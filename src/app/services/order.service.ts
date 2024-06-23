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
    tipo_encomienda: '',
    price: 0,
    instrucciones: ''
  };

  private orders: OrderRequest[] = [];
  constructor(private http: HttpClient) {}

  private randomValue: number = Math.floor(Math.random() * 100) + 1;

  setOrder(order: OrderRequest) {
    this.order = order;
    this.calculatePrice(order.express_shipping);
  }

  getOrder(): OrderRequest {
    return this.order;
  }

  setInstrucciones(instrucciones: string) {
    this.order.instrucciones = instrucciones;
  }

  getInstrucciones(): string {
    return this.order.instrucciones;
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

  addOrder(order: OrderRequest): void {
    this.createOrder(order).subscribe(response => {
      console.log('Order added:', response);
    });
  }

  getOrders(): Observable<OrderRequest[]> {
    return this.http.get<OrderRequest[]>(this.apiUrl);
  }

  getOrderss(): OrderRequest[] {
    return [this.order];
  }
  addInstruccion(instruccion: string): void {
    this.order.instrucciones = instruccion;
  }
  // getOrderDetails(index: number): OrderRequest | null {
  //   return this.orders[index] || null;
  // }
  getOrderDetails(orderId: number): Observable<OrderRequest> {
    return this.http.get<OrderRequest>(`${this.apiUrl}/${orderId}`);
  }

  getAllOrders(): Observable<OrderRequest[]> {
    return this.http.get<OrderRequest[]>(this.apiUrl);
  }
  sendOrdersToApi(orders: OrderRequest[]): Observable<OrderRequest[]> {
    // Assuming the API expects to receive the updated orders and returns them back
    return this.http.post<OrderRequest[]>(this.apiUrl + '/update', orders);
  }
}
