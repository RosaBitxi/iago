import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './componente/admin/admin.component';
import { IndexComponent } from './componente/index/index.component';
import { NivelComponent } from './componente/nivel/nivel.component';
import { RexistroComponent } from './componente/rexistro/rexistro.component';
import { ContactoComponent } from './componente/texto/contacto/contacto.component';
import { FacemosComponent } from './componente/texto/facemos/facemos.component';
import { SomosComponent } from './componente/texto/somos/somos.component';
import { UIUserComponent } from './componente/uiuser/uiuser.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'nivel/:id/:id2', component: NivelComponent },
  { path: 'rexistro', component: RexistroComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'user/:id', component: UIUserComponent},
  { path: 'somos', component: SomosComponent},
  { path: 'facemos', component: FacemosComponent},
  { path: 'contacto', component: ContactoComponent},
  { path: '*', component: IndexComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
