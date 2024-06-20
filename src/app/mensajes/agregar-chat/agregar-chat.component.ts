import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChatResponse } from '../interfaces/chat-response.interface';
import { AuthService } from '../../user/services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MensajesService } from '../services/mensajes.service';
import { Router } from '@angular/router';
import { ChatRequest } from '../interfaces/chat-request.interface';
import { LoginResponse } from '../../user/interfaces/login-response.interface';
import { chatTypeValidator, dateExistsValidator, dateFormatValidator } from '../helpers/chat-validators';

@Component({
  selector: 'app-agregar-chat',
  templateUrl: './agregar-chat.component.html',
  styleUrl: './agregar-chat.component.css'
})
export class AgregarChatComponent {
  form: FormGroup;
  loginResponse: LoginResponse | null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private mensajesService: MensajesService,
    private authService: AuthService,
    private snackBar: MatSnackBar // Inyectar MatSnackBar
  ) {
    this.form = this.fb.group({
      toAccount: ['', [Validators.required]],
      type: ['', [Validators.required, chatTypeValidator]],
      date: ['', [Validators.required, dateFormatValidator, dateExistsValidator]]
    });
    this.loginResponse = this.authService.getLoginResponse(); // Obtener LoginResponse del localStorage
  }

  ngOnInit(): void {
  }

  controlHasError(control: string, error: string): boolean {
    return this.form.controls[control].hasError(error);
  }

  onSubmit(): void {
    if (this.form.invalid || !this.loginResponse) {
      return;
    }

    const formValue = this.form.value;

    const newChat: ChatRequest = {
      id: 0,
      toAccount: formValue.toAccount,
      date: formValue.date,
      type: formValue.type,
      cuentaId: this.loginResponse.user.id // Asignar customerId del LoginResponse al nuevo objeto de cuenta
    };

    this.mensajesService.registerChat(newChat).subscribe({
      next: (response: ChatResponse) => {
        this.router.navigate(['/mensajes']);
        this.showSnackBar('Chat registrado exitosamente');
      },
      error: (error) => {
        console.error('Error al registrar chat:', error);
        this.showSnackBar('Error al registrar chat. Por favor, intente de nuevo.');
      }
    });
  }

  private showSnackBar(message: string): void {
    this.snackBar.open(message, 'Cerrar', {
      duration: 3000, // Duración en milisegundos
    });
  }
}
