import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ConectPHPService } from 'src/app/servizo/conect-php.service';
import { Nivel } from 'src/app/clase/Nivel';
import { Monumento } from 'src/app/clase/Monumento';

@Component({
  selector: 'createNivel',
  templateUrl: './create-nivel.component.html',
  styleUrls: ['./create-nivel.component.scss']
})
export class CreateNivelComponent implements OnInit {

  @Input() visibilidadeEngadir: boolean;
  arrayMonumentos: Monumento[];

  constructor(private phpService: ConectPHPService, private router: Router) { }

  ngOnInit(): void {
    this.obterMonumentos();
  }

  private obterMonumentos(): void {
    this.phpService.getMonumentos().subscribe(
      (datos) => {this.arrayMonumentos=datos}
    );
  }

  // Crease unha instancia baleira do monumento, que se rechea cos datos do formulario
  nivelModel = new Nivel("","","","","");

  //Para engadir o nivel
  submitNivel() {
    //para que saia un ou outro erro
    if(this.phpService.addNivel(this.nivelModel).subscribe()) {
      //CORRECTO
      //para que desaparezca o formulario unha vez enviados os datos
      this.visibilidadeEngadir = false;
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
