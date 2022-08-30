import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Monumento } from 'src/app/clase/Monumento';
import { Nivel } from 'src/app/clase/Nivel';
import { ConectPHPService } from 'src/app/servizo/conect-php.service';

@Component({
  selector: 'modifyNivel',
  templateUrl: './modify-nivel.component.html',
  styleUrls: ['./modify-nivel.component.scss']
})
export class ModifyNivelComponent implements OnInit {
  
  @Input() visibilidadeModificar: boolean;
  arrayMonumentos: Monumento[];
  arrayNiveles: Nivel[];

  constructor(private phpService: ConectPHPService, private router: Router) { }

  ngOnInit(): void {
    this.obterMonumentos();
    this.obterNiveles();
  }

  private obterMonumentos(): void {
    this.phpService.getMonumentos().subscribe(
      (datos) => {this.arrayMonumentos=datos}
    );
  }

  private obterNiveles(): void {
    this.phpService.getNiveles().subscribe(
      (datos) => {this.arrayNiveles=datos}
    );
  }


  // Crease unha instancia baleira do nivel, que se rechea cos datos do formulario
  nivelTarget = new Nivel("","","","","");

  //Para engadir o nivel
  updateNivel() {
    //para que saia un ou outro erro
    if(this.phpService.updateNivel(this.nivelTarget).subscribe()) {
      //CORRECTO
      //para que desaparezca o formulario unha vez enviados os datos
      this.visibilidadeModificar = false;
      //para indicarlle ao usuario que o elemento foi almacenado
      window.alert('OK');
      //para que se quede na mesma páxina admin
      window.location.reload();
      this.router.navigate(['/admin']);
    } else {
      //INCORRECTO
      window.alert('Not OK');
    }
  }

}
