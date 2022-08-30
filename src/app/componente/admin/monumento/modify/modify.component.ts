import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Monumento } from 'src/app/clase/Monumento';
import { ConectPHPService } from 'src/app/servizo/conect-php.service';

@Component({
  selector: 'modifyMonumento',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.scss']
})
export class ModifyComponent implements OnInit {

  public arrayMonumentos: Monumento[];
  
  @Input() visibilidadeEngadir: boolean;
  
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
  monumentoTarget = new Monumento("","","","","");

  //Para modificar o monumento
  updateMonumento() {
    //para que saia un ou outro erro
    if(this.phpService.updateMonumento(this.monumentoTarget).subscribe()) {
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
