import { Router } from '@angular/router';
import { Component } from '@angular/core';
import {FormControl} from "@angular/forms";
import {interval, Subject} from "rxjs";
import {map, takeUntil, takeWhile} from "rxjs/operators";
import { ActivatedRoute } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { OrderService } from '../../services/order.service';
import { OrderRequest } from '../../hacer-pedido/model/order-request.model';
import {addSeconds, format} from "date-fns";

@Component({
  selector: 'app-historial-menu',
  templateUrl: './historial-menu.component.html',
  styleUrl: './historial-menu.component.css',
  
})
export class HistorialMenuComponent {
  constructor(private Router:Router, private orderService: OrderService, private route: ActivatedRoute){ }
  order: OrderRequest | null = null;
  selectedOrder: OrderRequest | null = null;
 
  secs = new FormControl();
  countdownDisplay?: string;
  starter$ = new Subject<void>();
  
  resetOrder(){

  }
  irFiltrarPedidos() {
    this.Router.navigate(['/historial-de-pedidos/filtrar-pedidos']);
  }
  irDetallesDelEnvio() {
    this.Router.navigate(['/historial-de-pedidos/detalles-del-envio']);
  }
  irListaDeEnvios() {
    this.Router.navigate(['/historial-de-pedidos/lista-de-envios']);
  }
  ngOnInit(): void {
    const index = +this.route.snapshot.paramMap.get('index')!;
    // this.order = this.orderService.getOrderDetails(index);
    this.order = this.orderService.getOrder();
    this.orderService.getOrderDetails(index).subscribe((order: OrderRequest) => {
      this.order = order;
    }, error => {
      console.error('Error al obtener detalles del pedido:', error);
    });
    
    this.startCountdown();
     // Set the initial value for the countdown between 20 and 70 minutes
     const initialSecs = this.getRandomSeconds(20 * 60, 70 * 60); // Convert minutes to seconds
     
     this.secs.setValue(initialSecs);
     this.startCountdown();
  }
  getTheOrder():void{
    this.order = this.orderService.getOrder();
  }
  
  startCountdown(): void {
    this.starter$.next();  // Clear pending timers
    let nsecs = this.secs.value;
  
    interval(1000).pipe(
      takeUntil(this.starter$),
      takeWhile(countup => countup <= nsecs),
      map(countup => {
        let countdown = nsecs - countup;  // Calculate remaining seconds
        let d = new Date();
        d.setHours(0, 0, 0, 0);
        d = addSeconds(d, countdown);     // Add remaining seconds to the date
        let fmt = format(d, "HH:mm:ss");  // Format date into HH:mm:ss
        return fmt;                       // Return formatted string
      })
    ).subscribe(
      cd => this.countdownDisplay = cd,   // Update countdownDisplay with formatted string
      
    );
  }
  delayOrder(): void {
    const currentSecs = this.secs.value;
    const delayedSecs = currentSecs + (20 * 60); // Increase timer by 20 minutes in seconds

    // Update timer value
    this.secs.setValue(delayedSecs);
    this.startCountdown();
    // Show alert
    alert('Tu pedido se ha atrazado por 20 minutos.');
  }

  getRandomSeconds(minSecs: number, maxSecs: number): number {
    return Math.floor(Math.random() * (maxSecs - minSecs + 1)) + minSecs;
  }
 
}

