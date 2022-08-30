import { Component, OnInit } from '@angular/core';
import { AdminComponent } from '../admin.component';

@Component({
  selector: 'app-monumento',
  templateUrl: './monumento.component.html',
  styleUrls: ['./monumento.component.scss']
})
export class MonumentoComponent implements OnInit {

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
  verEnagdirMon() {
    this.visibilidadeEngadir = ! this.visibilidadeEngadir;
    // O resto de opcions non se visualizan
    this.visibilidadeModificar = false;
    this.visibilidadeEliminarMon = false;
  }

  verModifMon() {
    this.visibilidadeModificar = ! this.visibilidadeModificar;
    // O resto de opcions non se visualizan
    this.visibilidadeEngadir = false;
    this.visibilidadeEliminarMon = false;
  }

  verElimMon() {
    this.visibilidadeEliminarMon = ! this.visibilidadeEliminarMon;
    // O resto de opcions non se visualizan
    this.visibilidadeModificar = false;
    this.visibilidadeEngadir = false;
  }

}
