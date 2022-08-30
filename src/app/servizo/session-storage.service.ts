import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  constructor(private router: Router) { }

  //metodos para traballar co token de usuario
  setToken(token:string): void {
    window.sessionStorage.setItem('token', token);
  }

  getToken(): string {
    var valor=window.sessionStorage.getItem('token');
    if(valor !== null) {
      return ''+valor;
    } else {
      return 'NoNe';
    }
  }

  deleteToken(): void {
    window.sessionStorage.removeItem('token');
  }

  obterIDUsuario(storageToken: string): any {
    //Comproba o localStorage, se devolveu ben o usuario -> chama ao que é
    //Comproba o localStorage, se devolveu mal o usuario -> redirixe ao index, saindo un window.alert co erro

    if(storageToken === 'NoNe') {
      this.router.navigate(['/']);

    } else if(storageToken  === 'NOK-U') {
      this.router.navigate(['/']);

    } else if(storageToken === 'NOK-P') {
      window.alert('NOT OK: Password');
      this.router.navigate(['/']);

    } else {
        this.router.navigate(['/user',storageToken]);
    }
  }
}
