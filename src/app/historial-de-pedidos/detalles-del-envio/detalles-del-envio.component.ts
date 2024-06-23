import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../../services/order.service';
import { OrderRequest } from '../../hacer-pedido/model/order-request.model';
@Component({
  selector: 'app-detalles-del-envio',
  templateUrl: './detalles-del-envio.component.html',
  styleUrl: './detalles-del-envio.component.css'
})
export class DetallesDelEnvioComponent implements OnInit {
  order: OrderRequest | null = null;
  instrucciones: string = '';
  // selectedOrder: OrderRequest | null = null;
  constructor(private route: ActivatedRoute, private orderService: OrderService) {
    
  }

  ngOnInit(): void {
    // const index = +this.route.snapshot.paramMap.get('index')!;
    // this.order = this.orderService.getOrderDetails(index);
    this.order = this.orderService.getOrder();
    // this.instrucciones = this.orderService.getInstrucciones(); 
    const orderId = +this.route.snapshot.paramMap.get('id')!;
      this.orderService.getOrderDetails(orderId).subscribe((order: OrderRequest) => {
      this.order = order;
      this.instrucciones = order.instrucciones;
    });

  }
  getTheOrder():void{
    this.order = this.orderService.getOrder();
  }
  getInstruc(){
    this.orderService.getInstrucciones();
  }
}
