import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { environment } from '../../environments/environment';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  currentId: string;

  constructor(private http: HttpClient) { }

  getContatos(token) {
    return this.http.get(`${API_URL}/contatos/${token}`);
  }

  getContato(id, token) {
    return this.http.get(`${API_URL}/contato/${id}/${token}`);
  }

}
