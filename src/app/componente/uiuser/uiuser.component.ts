import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationError, Router } from '@angular/router';
import { NgbCarousel, NgbCarouselConfig, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { Nivel } from 'src/app/clase/Nivel';
import { Usuario } from 'src/app/clase/Usuario';
import { UsuarioNivel } from 'src/app/clase/UsuarioNivel';
import { ConectPHPService } from 'src/app/servizo/conect-php.service';
import { SessionStorageService } from 'src/app/servizo/session-storage.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'uiuser',
  templateUrl: './uiuser.component.html',
  styleUrls: ['./uiuser.component.scss']
})
export class UIUserComponent implements OnInit {

  //baseUrl = environment.baseUrl + "/iagoMachine/src/assets/";
  public usuario= new Usuario("","","","","");
  public nivel: Nivel;
  public novoID: any;

  //imagesNivel1 = [1, 2, 3, 4].map((n) => `${this.baseUrl}monuments/monument${n}.jpg`);
  //imagesNivel2 = [5, 6, 7, 8].map((n) => `assets/monuments/monument${n}.jpg`);
  //imagesNivel3 = [9, 10, 11, 12].map((n) => `assets/monuments/monument${n}.jpg`);

  constructor(private phpService: ConectPHPService, private router: Router, private ruta: ActivatedRoute, private storage: SessionStorageService) {
   }

  ngOnInit(): void {
    //saber que usuario é ao principio
    this.saberUsuario();

    //obter as imaxes de cada nivel
    let id = this.ruta.snapshot.paramMap.get('id');
    this.obterIDNivel(id);

    console.log(this.arrayNiveles);


  }

  private saberUsuario() {
    let id = this.ruta.snapshot.paramMap.get('id');
    
    if(this.eAdmin(id)) {
      //se é o admin, que vaia ao seu panel de control
      this.router.navigate(['/admin']);

    } else {
      this.phpService.getUsuario(id).subscribe(
        datos => {this.usuario = datos[0],
        this.eUsuario(datos[0].id)}        
      );
    }
  }

  private eUsuario(id: any) {
    if(this.storage.getToken() != id) {
      //Non é usuario
      this.usuario = new Usuario("","","","","");
      this.storage.deleteToken();
      this.router.navigate(['']);
    }
  }

  private eAdmin(id: any): boolean {
    if(id === '2') {
      return true;
    } else {
      return false;
    }
  }

  pecheSession() {
    this.storage.deleteToken();
    this.router.navigate(['']);
  }



  //Que se vexan o nivel e a porcentaxe
  public arrayUsuarioNivel: any = [];
  public arrayFotos: any = [];
  public arrayNiveles: any = [];


  private obterIDNivel(idUsuario: any) {
    //introducindo o ID de usuario, sale o ID de cada nivel que xoga
    this.phpService.getUsuarioNivel(idUsuario).subscribe(
      (datos) => {datos.forEach((elemento: any) => this.arrayUsuarioNivel.push(elemento.idNivel))
      this.arrayUsuarioNivel.forEach((elemento: any) => this.obterDatosNivel(elemento))}
    );
  }

  private obterDatosNivel(idNivel: any) {
    //introducindo o ID de nivel, salen as propiedades do nivel
    this.phpService.getNivel(idNivel).subscribe(
      (datos) => {datos.forEach((elemento: Nivel) => this.arrayFotos.push([elemento.mon1,elemento.mon2,elemento.mon3])),
        datos.forEach((elemento: Nivel) => this.arrayNiveles.push(elemento))}
    );
  }

  //Cada vez que se lle da a un nivel, que te leve a el
  verNivel(mon: number) {
    this.router.navigate(['/nivel',this.storage.getToken(),mon]);
  }
}
