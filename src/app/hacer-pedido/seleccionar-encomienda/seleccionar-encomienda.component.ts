import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-seleccionar-encomienda',
  templateUrl: './seleccionar-encomienda.component.html',
  styleUrl: './seleccionar-encomienda.component.css'
})



export class SeleccionarEncomiendaComponent {
  selectedEncomienda: string | null = null;//almacenamos el tipo de encomienda
  instruccionesGuardadas: boolean = false; //almacenamos si las instrucciones se han guardado


  constructor(private orderService: OrderService,private router: Router) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    const order = this.orderService.getOrder();
    this.selectedEncomienda = order.tipo_encomienda;

    // const storedEncomienda = localStorage.getItem('selectedEncomienda');
    // if (storedEncomienda) {
    //   this.selectedEncomienda = storedEncomienda;
    // }

    // const instrucciones = localStorage.getItem('instrucciones');
    // if(instrucciones){
    //   this.instruccionesGuardadas=true;
    // }

    const instrucciones = this.orderService.getInstrucciones();
    if (instrucciones) {
      this.instruccionesGuardadas = true;
    }

  }
  selectEncomienda(tipoEncomienda: string) {
    this.selectedEncomienda =tipoEncomienda;
    // localStorage.setItem('selectedEncomienda', tipoEncomienda);
    const order = this.orderService.getOrder();
    order.tipo_encomienda = tipoEncomienda;
    this.orderService.setOrder(order);
    console.log(`Tipo de Encomienda seleccionado: ${tipoEncomienda}`);
  }
  onInstruccionesEntrega() {
    this.router.navigate(['/hacer-pedido/instrucciones-entrega']);
  }

  isConfirmarDisabled(){
    return !this.selectedEncomienda || !this.instruccionesGuardadas;
  }

  confirmarPedido() {
    if (!this.isConfirmarDisabled()) {
      // console.log('Pedido confirmado con:', this.selectedEncomienda, localStorage.getItem('instrucciones'));
      console.log('Pedido confirmado con:', this.selectedEncomienda, this.orderService.getInstrucciones());

      // Limpiar el localStorage
      // localStorage.removeItem('selectedEncomienda');
      // localStorage.removeItem('instrucciones');
      
      // una vez confiramos la encomienda e instrucciones volvemos a
      // la interfaz anterior
      this.router.navigate(['/hacer-pedido/create-order']);
    }
  }
}
