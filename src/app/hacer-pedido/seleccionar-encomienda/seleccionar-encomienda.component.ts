import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seleccionar-encomienda',
  templateUrl: './seleccionar-encomienda.component.html',
  styleUrl: './seleccionar-encomienda.component.css'
})



export class SeleccionarEncomiendaComponent {
  selectedEncomienda: string | null = null;//almacenamos el tipo de encomienda
  instruccionesGuardadas: boolean = false; //almacenamos si las instrucciones se han guardado


  constructor(private router: Router) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    const storedEncomienda = localStorage.getItem('selectedEncomienda');
    if (storedEncomienda) {
      this.selectedEncomienda = storedEncomienda;
    }

    const instrucciones = localStorage.getItem('instrucciones');
    if(instrucciones){
      this.instruccionesGuardadas=true;
    }
  }
  selectEncomienda(tipoEncomienda: string) {
    this.selectedEncomienda =tipoEncomienda;
    localStorage.setItem('selectedEncomienda', tipoEncomienda);
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
      // Aquí puedes agregar la lógica para confirmar el pedido
      console.log('Pedido confirmado con:', this.selectedEncomienda, localStorage.getItem('instrucciones'));
      
      // Limpiar el localStorage
      localStorage.removeItem('selectedEncomienda');
      localStorage.removeItem('instrucciones');
      
      // Navegar a otra página si es necesario
      this.router.navigate(['/hacer-pedido/create-order']);
    }
  }
}
