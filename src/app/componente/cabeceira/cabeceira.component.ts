import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//Selector de lingua
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'cabeceira',
  templateUrl: './cabeceira.component.html',
  styleUrls: ['./cabeceira.component.scss']
})
export class CabeceiraComponent implements OnInit {

  activeLang= 'Galego'; //por defecto

  //Variables para os textos superiores
  public eSomos: boolean = false; //por defecto non se visualiza ningun texto
  public eFacemos: boolean = false;
  public eContactanos: boolean = false;
  
  constructor(public translate: TranslateService, private router: Router) {
    translate.addLangs(['Galego', 'Castellano', 'English']);
    translate.setDefaultLang('Galego');
   }

   switchLang(lang: string) {
    this.translate.use(lang);
  }

  ngOnInit(): void {
  }

  verSomos() {
   this.router.navigate(['/somos']);
  }

  verFacemos() {
    this.router.navigate(['/facemos']);
   }

   verContactanos() {
    this.router.navigate(['/contacto']);
   }

  
}

