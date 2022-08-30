import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Usuario } from 'src/app/clase/Usuario';
import { ConectPHPService } from 'src/app/servizo/conect-php.service';
import { SessionStorageService } from 'src/app/servizo/session-storage.service';

@Component({
  selector: 'app-rexistro',
  templateUrl: './rexistro.component.html',
  styleUrls: ['./rexistro.component.scss']
})
export class RexistroComponent implements OnInit {

  constructor(private phpService: ConectPHPService, private router: Router, private storage: SessionStorageService) { }

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


  submitUsuario(): void{
    //Comprobase que os contrasinais foron o mesmo
    if (!this.contrasinalIgual) {
      //para que saia un ou outro erro
      window.alert('Not OK: passwd');

    } else {
      if(this.phpService.addUsuario(this.usuarioModel).subscribe()) {
        //para que acceda ao xogo
        window.alert('OK: Valídate');
        this.router.navigate(['']);
      } else {
        //INCORRECTO: non se inscribeu na bbdd
        window.alert('Not OK: BBDD');
      }
    }
  }

  /*obterIDBBDD(): string {
    let saida='1'; //por defecto
    this.phpService.getUsuarios().subscribe(
      (datos) => {
      datos.array.forEach((element:any) => {
          if(this.usuarioModel.alias === element.alias) {
            saida = element.id;
          }
        });
      }
    );
    return saida;
  }*/


}
