import { Component, OnInit } from '@angular/core';
import { AdminComponent } from '../admin.component';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  visibilidadeEngadir = false;
  visibilidadeModificar = false;
  visibilidadeEliminarUs = false;

  constructor(private selector: AdminComponent) { }

  mostrarSelector() {
    //engadese a etiqueta 
    this.selector.selector = true;
    this.selector.monumento = false;
    this.selector.nivel= false;
    this.selector.usuario = false;
  }

  ngOnInit(): void {
  }

  //-------------------------------
  // FUNCIONALIDADE DOS BOTONS

  verElimUs() {
    this.visibilidadeEliminarUs = ! this.visibilidadeEliminarUs;
    // O resto de opcions non se visualizan
    this.visibilidadeModificar = false;
    this.visibilidadeEngadir = false;
  }

}
