import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Monumento } from 'src/app/clase/Monumento';
import { ConectPHPService } from "../../servizo/conect-php.service";
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SessionStorageService } from 'src/app/servizo/session-storage.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})

export class AdminComponent implements OnInit {

  selector = true; //por defecto, vese o que se quere mostrar
  monumento = false; //por defecto, non se ven as compoñentes
  nivel = false;
  usuario = false;

  public arrayMonumentos: Monumento[];

  constructor(private phpService: ConectPHPService, private router: Router, private storage: SessionStorageService) {
   }

  ngOnInit(): void {
  }

  mostrarMonumento() {
    //engadese a etiqueta 
    this.selector = false; //se se volve a clicar sobre o boton
    this.monumento = true; // a que se ve
    this.nivel= false; //o resto das compoñentes non se ven
    this.usuario = false;
  }

  mostrarNivel() {
    //engadese a etiqueta 
    this.selector = false;
    this.monumento = false;
    this.nivel= true;
    this.usuario = false;
  }

  mostrarUsuario() {
    //engadese a etiqueta 
    this.selector = false;
    this.monumento = false;
    this.nivel= false;
    this.usuario = true;

  }

  pecheSession() {
    this.storage.deleteToken();
    this.router.navigate(['']);
  }


}
