import { Component, OnInit } from '@angular/core';
import { AdminComponent } from '../admin.component';

@Component({
  selector: 'app-nivel-admin',
  templateUrl: './nivel-admin.component.html',
  styleUrls: ['./nivel-admin.component.scss']
})
export class NivelAdminComponent implements OnInit {

  visibilidadeEngadir = false;
  visibilidadeModificar = false;
  visibilidadeEliminarMon = false;

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
  verEnagdirNiv() {
    this.visibilidadeEngadir = ! this.visibilidadeEngadir;
    // O resto de opcions non se visualizan
    this.visibilidadeModificar = false;
    this.visibilidadeEliminarMon = false;
  }

  verModifNiv() {
    this.visibilidadeModificar = ! this.visibilidadeModificar;
    // O resto de opcions non se visualizan
    this.visibilidadeEngadir = false;
    this.visibilidadeEliminarMon = false;
  }

  verElimNiv() {
    this.visibilidadeEliminarMon = ! this.visibilidadeEliminarMon;
    // O resto de opcions non se visualizan
    this.visibilidadeModificar = false;
    this.visibilidadeEngadir = false;
  }
}
