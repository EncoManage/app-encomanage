import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ChatResponse } from '../interfaces/chat-response.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { MensajesService } from '../services/mensajes.service';

@Component({
  selector: 'app-detalle-chat',
  templateUrl: './detalle-chat.component.html',
  styleUrl: './detalle-chat.component.css'
})
export class DetalleChatComponent {
  
  chat: ChatResponse | undefined;
  
  chatForm: FormGroup;
  messages: { text: string, sender: string, timestamp: Date, isUserMessage: boolean }[] = [];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private mensajesService: MensajesService
  ) {
    this.chatForm = this.fb.group({
      message: ['', Validators.required]
    });

    // Inicializar con mensajes predefinidos
    this.messages.push(
      { text: 'Hola :)', sender: 'Proveedor/Cliente', timestamp: new Date(), isUserMessage: false },
      { text: 'Tengo una consulta', sender: 'User', timestamp: new Date(), isUserMessage: false }
    );
  }

  sendMessage() {
    if (this.chatForm.valid) {
      this.messages.push({
        text: this.chatForm.value.message,
        sender: 'Usuario',
        timestamp: new Date(),
        isUserMessage: true
      });
      this.chatForm.reset();
    }
  }
}
