import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { SignUpRequest } from '../interfaces/signup-request.interface';
import { Observable } from 'rxjs';
import { SignUpResponse } from '../interfaces/signup-response.interface';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  signUp(signUpData: SignUpRequest): Observable<SignUpResponse> {
    const url = `${this.baseUrl}/cuentas`;
    return this.http.post<SignUpResponse>(url, signUpData);
  }
}
