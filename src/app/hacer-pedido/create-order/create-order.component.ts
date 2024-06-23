import { Component, OnInit } from '@angular/core';
import { OrderRequest } from '../model/order-request.model';
import { OrderService } from '../../services/order.service';
import { Router } from '@angular/router';
import { N } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {
  order: OrderRequest;
  price: number = 0;
  isFormValid: boolean = false;
  isPickupAddressValid: boolean = true;
  isShippingAddressValid: boolean = true;

  // Definir las abreviaturas permitidas
  readonly validTypesOfWays = [
    "AL", "AV", "BA", "CR", "CLL", "CA", "GA", "JR", "ML", "OV", "PJE", "PL", "PQ", "PR", "PAS", "PZ", "CM", "CU", "SE", "PU", "BO"
  ];

  constructor(private orderService: OrderService, private router: Router) {
    this.order = this.orderService.getOrder();
  }



  
  onSelectEncomienda():void{

    console.log('Seleccionar Tipo de Encomienda clicado');
    this.router.navigate(['/hacer-pedido/seleccionar-encomienda']);
    orders: [] = [];
    newOrders: OrderRequest = {
      shipping_address: '',
     pickup_address: '',
      express_shipping: false,
      tipo_encomienda: '',
      price: 0,
     }
  }
  orders: OrderRequest | null = null;
  selectedOrder: OrderRequest | null = null;
  instrucciones: string = '';

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
  ngOnInit(): void {
    this.order = this.orderService.getOrder();
    this.price = this.orderService.getPrice();
    this.checkFormValidity();
    this.orders = [
      {
        shipping_address: '',
        pickup_address: '',
        express_shipping: false,
        tipo_encomienda: '',
        price: 0
      },
    ];
  }
  



  checkFormValidity(): void {
    this.isPickupAddressValid = this.isValidAddress(this.order.pickup_address);
    this.isShippingAddressValid = this.isValidAddress(this.order.shipping_address);
    this.isFormValid = this.isPickupAddressValid && this.isShippingAddressValid && !!this.order.tipo_encomienda;
    if (this.isFormValid) {
      this.updatePrice();
    }
  }

  onInput(): void {
    this.checkFormValidity();
  }

  onSubmitOrder(): void {
    this.orderService.setOrder(this.order);
    this.addOrder();
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
  addOrder() {
    this.newOrder = {
      shipping_address: this.order.shipping_address,
      pickup_address: this.order.pickup_address,
      express_shipping: this.order.express_shipping,
      tipo_encomienda: this.order.tipo_encomienda 
    };
    this.orderService.addOrder(this.newOrder);
    this.orders = this.orderService.getOrders(); // Refresh the list
    this.newOrder = {
      shipping_address: '',
      pickup_address: '',
      express_shipping: false,
      tipo_encomienda: 'z' 
    }; // Reset the form
  }
  onSelectOrder(order: OrderRequest): void {
    this.selectedOrder = order;
    this.instrucciones = this.orderService.getInstrucciones();
    
  }
  
}

