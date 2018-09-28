import { LoginService } from './service/login.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private loginService: LoginService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // return true;

    const loggedIn = this.loginService.currentToken !== '' && this.loginService.currentToken !== undefined;
    console.log(`Permissão: ${loggedIn}`);
    if (!loggedIn) {
      this.router.navigate(['/']);
    }

    return loggedIn;

  }
}
