import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Monumento } from 'src/app/clase/Monumento';
import { ConectPHPService } from 'src/app/servizo/conect-php.service';

@Component({
  selector: 'createMonumento',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private phpService: ConectPHPService, private router: Router) { }

  @Input() visibilidadeEngadir: boolean;

  ngOnInit(): void {
  }


  // Crease unha instancia baleira do monumento, que se rechea cos datos do formulario
  monumentoModel = new Monumento("","","","","");

  //Para engadir o monumento
  submitMonumento() {
    //para que saia un ou outro erro
    if(this.phpService.addMonumento(this.monumentoModel).subscribe()) {
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
