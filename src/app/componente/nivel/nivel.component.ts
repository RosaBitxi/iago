import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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


  constructor(private router: Router, private storage: SessionStorageService) { }

  ngOnInit(): void {
  }

  pecheSession() {
    this.storage.deleteToken();
    this.router.navigate(['']);
  }

  volver() {
    this.router.navigate(['/user',this.storage.getToken()]);
  }

}
