import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { OrderResponse } from '../../hacer-pedido/model/order-response.model';
import { OrderRequest } from '../../hacer-pedido/model/order-request.model';
import { classNames } from '@angular/cdk/schematics';

@Component({
  selector: 'app-lista-de-envios',
  templateUrl: './lista-de-envios.component.html',
  styleUrl: './lista-de-envios.component.css'
})
export class ListaDeEnviosComponent {
  order: OrderRequest;
  

    irAlMenu() {
    this.router.navigate(['/historial-de-pedidos/historial-menu']);
    }
  orders: OrderRequest[] = []; // This would be your list of available orders
  selectedOrder: OrderRequest | null = null;
  instrucciones: string = '';

  constructor(private orderService: OrderService, private router: Router) { 
    this.order = this.orderService.getOrder();
    this.orders = this.orderService.getOrders();
    this.instrucciones = this.orderService.getInstrucciones();
  }

  ngOnInit(): void {
    this.updateList();
   // this.orders = [
   //   {
     //   shipping_address: 'aaaa',
     //   pickup_address: 'bbb',
    //    express_shipping: false,
    //    tipo_encomienda: 'cccc'
     // }, 
    //];
  }
    onSelectOrder(order: OrderRequest): void {
      this.selectedOrder = order;
      this.orderService.setOrder(order); // Save the selected order in the service
      
      this.instrucciones = this.orderService.getInstrucciones(); // Get any instructions related to the order
    }
    viewOrderDetails(index: number): void {
      this.router.navigate(['/detalles-del-envio', index]);
    }
    updateList() :void{
      this.orders = this.orderService.getOrders();
    }
    getOrdersCount(){
      return this.orders.length;
    }
    getCurrentOrderInstruction(currentOrderIndex: number): string {
      if (currentOrderIndex !== null && currentOrderIndex >= 0 && currentOrderIndex < this.instrucciones.length) {
        return this.instrucciones[currentOrderIndex];
      }
      return '';
    }
    findOrderIndex(order: OrderRequest): number {
      return this.orders.indexOf(order);
    }
   
}





