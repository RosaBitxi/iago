import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/clase/Usuario';
import { ConectPHPService } from 'src/app/servizo/conect-php.service';
import { SessionStorageService } from 'src/app/servizo/session-storage.service';

@Component({
  selector: 'index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor(private router: Router, private PHPService: ConectPHPService, private comprobarToken: SessionStorageService) { }

  ngOnInit(): void {
    this.comprobarToken.obterIDUsuario(this.comprobarToken.getToken());
  }

  public arrayUsuarios: any[];
  usuarioModel = new Usuario("","","","","");

  entrarUsuario() {
    //comprobar se é usuario, e se é contrasinal
    this.PHPService.login(this.usuarioModel).subscribe(
      data => {window.sessionStorage.setItem('token',data.resultado),
      window.location.reload()}
    );
    }

  rexistrarUsuario() {
    this.router.navigate(['/rexistro']);
  }

}
