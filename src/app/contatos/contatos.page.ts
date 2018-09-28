import { LoginService } from '../service/login.service';
import { ContatoService } from '../service/contato.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.page.html',
  styleUrls: ['./contatos.page.scss'],
})
export class ContatosPage implements OnInit {

  constructor(private router: Router, private contatoService: ContatoService, private loginSevice: LoginService) { }

  currentToken;
  data: any;

  ngOnInit() {
    this.currentToken = this.loginSevice.currentToken;
    this.contatoService
      .getContatos(this.currentToken)
      .subscribe(data => {
        this.data = data;
      });
  }

  logout() {
    this.loginSevice.currentToken = '';
    this.router.navigate(['/']);
  }

  detalhes(id) {
    this.contatoService.currentId = id;
    this.router.navigate(['/contato_detail']);
  }

}
