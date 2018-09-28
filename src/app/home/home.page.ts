import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  usuario: string;
  senha: string;
  data: any;

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit() {
    this.data = {usuario: '', senha: '', token: ''};
  }

  login() {
    // console.log(`${this.usuario} - ${this.senha}`);
    this.loginService
      .login(this.usuario, this.senha)
      .subscribe(data => {
        // console.log(data);
        this.data = data;
        if (this.data.token !== '' && this.data.token !== undefined) {
          this.loginService.currentToken = this.data.token;
          console.log(this.loginService.currentToken);
        }
        this.usuario = '';
        this.senha = '';
        this.router.navigate(['/contatos']);
      });
  }

}
