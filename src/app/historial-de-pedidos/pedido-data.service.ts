import { Injectable } from '@angular/core';
import { OrderRequest } from "./order-request.model";

@Injectable({
  providedIn: 'root'
})
export class PedidoDataService {

  constructor() { }

  getOrderRequest(): OrderRequest[] {
    return OrderRequest;
  }
}
