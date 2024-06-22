import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { OrderRequest } from '../model/order-request.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrl: './order-confirmation.component.css'
})
export class OrderConfirmationComponent implements OnInit{
  order: OrderRequest;
  instrucciones: string;

  constructor(private orderService: OrderService, private router: Router) {
    this.order = this.orderService.getOrder();
    this.instrucciones = this.orderService.getInstrucciones();
  }

  ngOnInit(): void {}

  volverAlMenu(): void {
    this.router.navigate(['/home']);
  }
  confirmOrder(): void {
    this.orderService.addOrder(this.order);
    this.volverAlMenu();
  }
}
