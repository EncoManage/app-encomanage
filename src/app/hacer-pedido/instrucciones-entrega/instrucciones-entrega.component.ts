import { OrderRequest } from './../model/order-request.model';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-instrucciones-entrega',
  templateUrl: './instrucciones-entrega.component.html',
  styleUrl: './instrucciones-entrega.component.css'
})
export class InstruccionesEntregaComponent {
 instrucciones: string="";
  // order:OrderRequest;

 constructor(private orderService: OrderService,private router: Router) {
    this.instrucciones = this.orderService.getInstrucciones();
    // this.order=this.orderService.getOrder();
 }
 
 guardarInstrucciones() {
  //añadir al arreglo
  // this.order.instrucciones = this.instrucciones;
  this.orderService.addInstruccion(this.instrucciones);
  console.log('Instrucciones guardadas:', this.instrucciones);
  // Guardar instrucciones en localStorage o algún servicio
  // localStorage.setItem('instrucciones', this.instrucciones);
  this.orderService.setInstrucciones(this.instrucciones);
  this.router.navigate(['/hacer-pedido/seleccionar-encomienda'])
  
 }
 
}
