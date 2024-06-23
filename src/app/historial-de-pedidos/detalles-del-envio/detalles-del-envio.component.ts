import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../../services/order.service';
import { OrderRequest } from '../../hacer-pedido/model/order-request.model';
import { Router } from '@angular/router';
import {FormControl} from "@angular/forms";
import {interval, Subject} from "rxjs";
import {map, takeUntil, takeWhile} from "rxjs/operators";


import {addSeconds, format} from "date-fns";
@Component({
  selector: 'app-detalles-del-envio',
  templateUrl: './detalles-del-envio.component.html',
  styleUrl: './detalles-del-envio.component.css'
})
export class DetallesDelEnvioComponent implements OnInit {
  order: OrderRequest | null = null;
  instrucciones: string = '';
  // selectedOrder: OrderRequest | null = null;
  constructor(private route: ActivatedRoute, private orderService: OrderService,private Router: Router ) {
    
  }
  secs = new FormControl();
  countupDisplay?: string;
  starter$ = new Subject<void>();
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
    this.startCountup();
    // Set the initial value for the countdown between 20 and 70 minutes
    const initialSecs = this.getRandomSeconds(10 * 60, 20 * 60); // Convert minutes to seconds
    
    this.secs.setValue(initialSecs);
    this.startCountup();
  }
  getTheOrder():void{
    this.order = this.orderService.getOrder();
  }
  getInstruc(){
    this.orderService.getInstrucciones();
  }
  startCountup(): void {
    this.starter$.next();  // Clear pending timers
  
    let initialSecs = this.secs.value;  // Get the initial seconds value
  
    interval(1000).pipe(
      takeUntil(this.starter$),
      map(countup => {
        let totalSeconds = initialSecs + countup;  // Calculate total elapsed seconds starting from initialSecs
        let d = new Date();
        d.setHours(0, 0, 0, 0);
        d = addSeconds(d, totalSeconds);  // Add elapsed seconds to the date
        let fmt = format(d, "HH:mm:ss");  // Format date into HH:mm:ss
        return fmt;  // Return formatted string
      })
    ).subscribe(
      cd => this.countupDisplay = cd  // Update countupDisplay with formatted string
    );
  }
  getRandomSeconds(minSecs: number, maxSecs: number): number {
    return Math.floor(Math.random() * (maxSecs - minSecs + 1)) + minSecs;
  }
  irAlMenu() {
    this.Router.navigate(['/historial-de-pedidos/historial-menu']);
  }
  
}
