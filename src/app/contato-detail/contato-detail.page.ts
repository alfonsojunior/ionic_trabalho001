import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { ContatoService } from '../service/contato.service';

@Component({
  selector: 'app-contato-detail',
  templateUrl: './contato-detail.page.html',
  styleUrls: ['./contato-detail.page.scss'],
})
export class ContatoDetailPage implements OnInit {

  currentToken;
  data: any;

  constructor(private contatoService: ContatoService, private loginSevice: LoginService) { }

  ngOnInit() {

    this.data = {id: '', nome: '', curriculo: ''};
    this.currentToken = this.loginSevice.currentToken;
    this.contatoService
      .getContato(this.contatoService.currentId, this.currentToken)
      .subscribe(data => {
        this.data = data;
      });

  }

}
