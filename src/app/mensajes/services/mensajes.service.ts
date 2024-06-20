import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChatResponse } from '../interfaces/chat-response.interface';
import { ChatRequest } from '../interfaces/chat-request.interface';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  // Método para obtener todas las transacciones
  //getAllChats(): Observable<ChatResponse[]> {
  //  const url = `${this.baseUrl}/chats`; 
  //  return this.http.get<ChatResponse[]>(url);
  //}

  getAllChats(cuentaId:number): Observable<ChatResponse[]> {
    const url = `${this.baseUrl}/chats/cuentas/${cuentaId}`; 
    return this.http.get<ChatResponse[]>(url);
  }

  getChatById(chatId: number): Observable<ChatResponse> {
    const url = `${this.baseUrl}/chats/${chatId}`;
    return this.http.get<ChatResponse>(url);
  }

  registerChat(newChat: ChatRequest): Observable<ChatResponse> {
    const url = `${this.baseUrl}/chats`; // Endpoint del backend para registrar cuentas
    return this.http.post<ChatRequest>(url, newChat);
  }
}