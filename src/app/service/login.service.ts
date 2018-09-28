import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { environment } from '../../environments/environment';

const API_URL = environment.apiUrl;
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  currentToken: string;
  data: any;

  constructor(private http: HttpClient) { }

  login(usuario: string, senha: string) {

    const body = JSON.stringify({usuario: usuario, senha: senha});
    // console.log(body);
    this.data = this.http.post(`${API_URL}/login`, body, httpOptions);
    return this.data;

  }
}
