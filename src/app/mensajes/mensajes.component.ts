import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ChatResponse } from './interfaces/chat-response.interface';
import { MensajesService } from './services/mensajes.service';
import { AuthService } from '../user/services/auth.service';
import { LoginResponse } from '../user/interfaces/login-response.interface';
import { MatCard, MatCardTitle } from '@angular/material/card';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrl: './mensajes.component.css'
})
export class MensajesComponent implements OnInit {
  userFullName: string = ''; // Valor por defecto
  chats: ChatResponse[] = []; // Arreglo para almacenar las transacciones
  filteredChats: ChatResponse[] = []; // Arreglo para almacenar las transacciones filtradas
  startDate: Date | null = null; // Fecha de inicio para el filtro
  endDate: Date | null = null; // Fecha de fin para el filtro
  

  proveedorImage: string = '../assets/chatProv.jpg';
  clienteImage: string = "../assets/chatback.png";

  private  mensajesService = inject(MensajesService);
  private authService= inject(AuthService);
  loginResponse: LoginResponse | null;
  
  constructor(
    //private authService: AuthService,
    //private mensajesService: MensajesService,
    private router: Router
  ) { 
    this.loginResponse = this.authService.getLoginResponse(); 
  }

  ngOnInit(): void {
    // Obtener el objeto LoginResponse almacenado en localStorage
    const loginResponse: LoginResponse | null = this.authService.getLoginResponse();
    
    // Verificar si el usuario ha iniciado sesión y obtener el nombre completo si es así
    if (loginResponse && this.authService.isLoggedIn()) {
      const { name } = loginResponse.user;
      this.userFullName = `${name}`;
    }

    // Llamar al método para obtener chats
    if (this.loginResponse) {
      this.loadChats(this.loginResponse.user.id); // Cargar cuentas utilizando el customerId del usuario logueado
      this.getChatData(this.loginResponse.user.id);
    }
  }

  loadChats(cuentaId: number): void {
    this.mensajesService.getAllChats(cuentaId).subscribe({
      next: (chats: ChatResponse[]) => {
        this.chats = chats;
        this.filteredChats = chats;
        console.log('Cuentas del cliente:', chats);
      },
      error: (error) => {
        console.error('Error al cargar cuentas del cliente:', error);
      }
    });
  }

  // Método para obtener datos de chats
  private getChatData(cuentaId:number): void {
    this.mensajesService.getAllChats(cuentaId).subscribe(
      (chats: ChatResponse[]) => {
        this.chats = chats;
        this.filteredChats = chats; // Inicialmente, todas los chats están sin filtrar
        console.log('Chats obtenidos:', chats);
      },
      (error) => {
        console.error('Error al obtener los chats:', error);
        // Manejar el error adecuadamente según las necesidades de tu aplicación
      }
    );
  }

  // Método para aplicar el filtro de rango de fechas
  applyDateFilter(): void {
    if (this.startDate && this.endDate) {
      const start = new Date(this.startDate).setHours(0, 0, 0, 0);
      const end = new Date(this.endDate).setHours(23, 59, 59, 999);

      this.filteredChats = this.chats.filter(chat => {
        const chatDate = new Date(chat.date).getTime();
        return chatDate >= start && chatDate <= end;
      });
    } else {
      this.filteredChats = this.chats;
    }
  }

  // Método para mostrar todas los chats
  showAllChats(): void {
    this.filteredChats = this.chats;
    this.startDate = null;
    this.endDate = null;
  }

  viewChatDetails(): void {
    this.router.navigate(['/mensajes/detalle-chat']);
  }

  addNewChat(): void{
    this.router.navigate(['/mensajes/agregar-chat']);
  }

  getChatImage(chatType: string): string {
    if (chatType === 'proveedor') {
      return this.proveedorImage;
    } else if (chatType === 'cliente') {
      return this.clienteImage;
    } else {
      return '../assets/open.png'; // Imagen por defecto en caso de que no sea ni proveedor ni cliente
    }
  }
}
