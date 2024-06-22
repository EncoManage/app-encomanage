import { Component, OnInit } from '@angular/core';
import { OrderRequest } from '../model/order-request.model';
import { OrderService } from '../../services/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {
  order: OrderRequest;
  price: number = 0;
  isFormValid: boolean = false;

  // Definir las abreviaturas permitidas
  readonly validTypesOfWays = [
    "AL", "AV", "BA", "CR", "CLL", "CA", "GA", "JR", "ML", "OV",
     "PJE", "PL", "PQ", "PR", "PAS", "PZ", "CM", "CU", "SE", "PU", "BO",
     "AL.", "AV.", "BA.", "CR.", "CLL.", "CA.", "GA.", "JR.", "ML.", "OV.",
     "PJE.", "PL.", "PQ.", "PR.", "PAS.", "PZ.", "CM.", "CU.", "SE.", "PU.", "BO.",
    "Al", "Av", "Ba", "Cr", "Cll", "Ca", "Ga", "Jr", "Ml", "Ov",
     "Pje", "Pl", "Pq", "Pr", "Pas", "Pz", "Cm", "Cu", "Se", "Pu", "Bo",
     "Al.", "Av.", "Ba.", "Cr.", "Cll.", "Ca.", "Ga.", "Jr.", "Ml.", "Ov.",
     "Pje.", "Pl.", "Pq.", "Pr.", "Pas.", "Pz.", "Cm.", "Cu.", "Se.", "Pu.", "Bo."
  ];

  constructor(private orderService: OrderService, private router: Router) {
    this.order = this.orderService.getOrder();
  }

  ngOnInit(): void {
    this.price = this.orderService.getPrice();
    this.checkFormValidity();
  }

  onSelectEncomienda(): void {
    console.log('Seleccionar Tipo de Encomienda clicado');
    this.router.navigate(['/hacer-pedido/seleccionar-encomienda']);
  }

  onToggleExpressShipping(): void {
    this.order.express_shipping = !this.order.express_shipping;
    this.updatePrice();
    console.log('Envio Express activado: ', this.order.express_shipping);
  }

  updatePrice(): void {
    this.price = this.orderService.calculatePrice(this.order.express_shipping);
    this.orderService.setPrice(this.price);
  }

  // Función para validar la dirección
  isValidAddress(address: string): boolean {
    const regex = new RegExp(`^(${this.validTypesOfWays.join('|')})\\s`, 'i');
    return regex.test(address);
  }

  checkFormValidity(): void {
    const isPickupAddressValid = this.isValidAddress(this.order.pickup_address);
    const isShippingAddressValid = this.isValidAddress(this.order.shipping_address);
    this.isFormValid = isPickupAddressValid && isShippingAddressValid && !!this.order.tipo_encomienda;
    if (this.isFormValid) {
      this.updatePrice();
    }
  }

  onInput(): void {
    this.checkFormValidity();
  }

  onSubmitOrder(): void {
    this.order.price = this.price; // Asegurarse de que el precio se incluye en la orden
    this.orderService.createOrder(this.order).subscribe(response => {
      console.log('Pedido creado:', response);
      this.router.navigate(['/hacer-pedido/order-confirmation']);
    }, error => {
      console.error('Error al crear el pedido:', error);
    });
  }

  onInstruccionesEntrega(): void {
    this.router.navigate(['/hacer-pedido/instrucciones-entrega']);
  }
}
