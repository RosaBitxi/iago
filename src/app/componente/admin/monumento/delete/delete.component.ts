import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Monumento } from 'src/app/clase/Monumento';
import { ConectPHPService } from 'src/app/servizo/conect-php.service';

@Component({
  selector: 'deleteMonumento',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  public arrayMonumentos: Monumento[];
  public monumentoTarget= new Monumento("","","","","");
  
  constructor(private phpService: ConectPHPService, private router: Router) { }

  ngOnInit(): void {
    //en canto carga a páxina, xa sucede
    this.obterMonumentos();
  }

  private obterMonumentos(): void {
    this.phpService.getMonumentos().subscribe(
      (datos) => {this.arrayMonumentos=datos}
    );
  }

  deleteMon() {
    if(this.phpService.deleteMonumento(this.monumentoTarget).subscribe()) {
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
