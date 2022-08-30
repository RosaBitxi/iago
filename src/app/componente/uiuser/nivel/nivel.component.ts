import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Monumento } from 'src/app/clase/Monumento';
import { Nivel } from 'src/app/clase/Nivel';
import { Usuario } from 'src/app/clase/Usuario';
import { ConectPHPService } from 'src/app/servizo/conect-php.service';
import { SessionStorageService } from 'src/app/servizo/session-storage.service';

@Component({
  selector: 'nivel',
  templateUrl: './nivel.component.html',
  styleUrls: ['./nivel.component.scss']
})
export class NivelComponent implements OnInit {

  listaMonumentos= [
    {nome: "Nome1", src:"image1", descrip: "descrip1"},
    {nome: "Nome2", src:"image2", descrip: "descrip2"},
    {nome: "Nome3", src:"image3", descrip: "descrip3"},
  ]

  public monumento1 = new Monumento("","","","","");
  public monumento2 = new Monumento("","","","","");
  public monumento3 = new Monumento("","","","","");

  constructor(private router: Router, private storage: SessionStorageService, private phpService: ConectPHPService, private ruta: ActivatedRoute) { }

  ngOnInit(): void {
    this.saberUsuario();
    this.saberNivel();

  }

  pecheSession() {
    this.storage.deleteToken();
    this.router.navigate(['']);
  }

  volver() {
    this.router.navigate(['/user',this.storage.getToken()]);
  }

  //Para obter os datos do usuario
  public arrayUsuario: Usuario[] = [];
  public usuario= new Usuario("","","","","");
  
  private saberUsuario() {
    let id = this.ruta.snapshot.paramMap.get('id');
  
    if(id === this.storage.getToken()) {
      this.phpService.getUsuario(id).subscribe(
        datos => {this.usuario = datos[0]}       
      );
    } else {
      this.pecheSession();
      this.router.navigate(['']);
    }
  }

    //para obter os datos de nivel
    public nivel = new Nivel("","","","","");

  private saberNivel() {
    let id = this.ruta.snapshot.paramMap.get('id2');
    this.phpService.getNivel(id).subscribe(
      datoNivel => {this.phpService.getMonumento(datoNivel[0].mon1).subscribe(
        datoMonumento => {this.monumento1=datoMonumento[0]
        }),
        this.phpService.getMonumento(datoNivel[0].mon2).subscribe(
          datoMonumento => {this.monumento2=datoMonumento[0]
        }),
        this.phpService.getMonumento(datoNivel[0].mon3).subscribe(
            datoMonumento => {this.monumento3=datoMonumento[0]
        }),
        this.nivel = datoNivel[0],
        console.log(this.nivel)
      });
  }

  //segun a dificultade, represéntase con asteriscos
  dificultade(cod: string) {
    let dific: string;
    if(cod === 'fac') {
      dific = '*';
    } else if (cod === 'med') {
      dific = '***';
    } else {
      dific = '*****';
    }
    return dific;
  }

  /*private saberMonumento(idMonumento: any):
    this.phpService.getMonumento(idMonumento).subscribe(
      datos => {monumento=datos[0]}
    );
  }*/

}
