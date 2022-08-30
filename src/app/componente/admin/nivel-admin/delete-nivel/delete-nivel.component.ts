import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Nivel } from 'src/app/clase/Nivel';
import { ConectPHPService } from 'src/app/servizo/conect-php.service';

@Component({
  selector: 'deleteNivel',
  templateUrl: './delete-nivel.component.html',
  styleUrls: ['./delete-nivel.component.scss']
})
export class DeleteNivelComponent implements OnInit {

  public arrayNiveles: Nivel[];
  public nivelTarget= new Nivel("","","","","");

  constructor(private phpService: ConectPHPService, private router: Router) { }

  ngOnInit(): void {
    //en canto carga a páxina, xa sucede
    this.obterNiveles();
  }

  private obterNiveles(): void {
    this.phpService.getNiveles().subscribe(
      (datos) => {this.arrayNiveles=datos}
    );
  }

  deleteNivel() {
    if(this.phpService.deleteNivel(this.nivelTarget).subscribe()) {
      //ELIMINADA
      //para indicarlle ao usuario que o elemento foi almacenado
      window.alert('OK');
      //para que se quede na mesma páxina admin
      window.location.reload();
      this.router.navigate(['/admin']);
    } else {
      window.alert('Not OK');
    }
  }

}
