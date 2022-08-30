import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/clase/Usuario';
import { ConectPHPService } from 'src/app/servizo/conect-php.service';

@Component({
  selector: 'deleteUsuario',
  templateUrl: './delete-usuario.component.html',
  styleUrls: ['./delete-usuario.component.scss']
})
export class DeleteUsuarioComponent implements OnInit {
  public arrayUsuarios: Usuario[];
  public usuarioTarget= new Usuario("","","","","");
  
  constructor(private phpService: ConectPHPService, private router: Router) { }

  ngOnInit(): void {
    //en canto carga a páxina, xa sucede
    this.obterUsuarios();
  }

  private obterUsuarios(): void {
    this.phpService.getUsuarios().subscribe(
      (datos) => {this.arrayUsuarios=datos}
    );
  }

  deleteUs() {
    if(this.phpService.deleteUsuario(this.usuarioTarget).subscribe()) {
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
