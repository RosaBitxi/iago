import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Usuario } from 'src/app/clase/Usuario';
import { ConectPHPService } from 'src/app/servizo/conect-php.service';

@Component({
  selector: 'app-rexistro',
  templateUrl: './rexistro.component.html',
  styleUrls: ['./rexistro.component.scss']
})
export class RexistroComponent implements OnInit {

  constructor(private phpService: ConectPHPService, private router: Router) { }

  ngOnInit(): void {
  }

  // Crease unha instancia baleira do monumento, que se rechea cos datos do formulario
  usuarioModel = new Usuario("","","","","");
  contrasinalIgual= false; //por defecto, os contrasinais son distintos
  usuarioIgual = false; //por defecto, non existe ese usuario

  comprobarContrasinal() {
    //comproba que o contrasinal estaba ben escrito
    if(this.usuarioModel.passwd === this.usuarioModel.doblePasswd) {
      this.contrasinalIgual = true;
    }
  }

  public arrayUsuarios: any[];

  comprobarUsuario() {
    //comproba que non existe ese alias
    this.phpService.getUsuarios().subscribe(
      (datos) => {this.arrayUsuarios=datos}
    );
    for(let i=0; i< this.arrayUsuarios.length; i++) {
      if(this.usuarioModel.alias === this.arrayUsuarios[i].alias) {
        this.usuarioIgual = true;
        break;
      } else {
        this.usuarioIgual = false;
      }
    }
  }

  submitUsuario(): void{
    //Comprobase que os contrasinais foron o mesmo
    if (!this.contrasinalIgual) {
      //para que saia un ou outro erro
      window.alert('Not OK: passwd');
    } else if(this.usuarioIgual) {
      //INCORRECTO. Os alias son iguais
      window.alert('Not OK: alias');
    } else {
      if(this.phpService.addUsuario(this.usuarioModel).subscribe()) {
        //CORRECTO
        window.alert('OK');
        //para que acceda ao xogo
        this.router.navigate(['/nivel']);
      } else {
        //INCORRECTO: non se inscribeu na bbdd
        window.alert('Not OK: BBDD');
      }
    }
  }

}
