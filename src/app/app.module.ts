import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Componentes
import { PedepaxinaComponent } from './componente/pedepaxina/pedepaxina.component';
import { IndexComponent } from './componente/index/index.component';
import { CabeceiraComponent } from './componente/cabeceira/cabeceira.component';

//modulos
  //multilingual
import  { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UIUserComponent } from './componente/uiuser/uiuser.component';
import { NivelComponent } from './componente/nivel/nivel.component';
import { RexistroComponent } from './componente/rexistro/rexistro.component';
import { AdminComponent } from './componente/admin/admin.component';
import { FormsModule, NgForm } from '@angular/forms';
import { MonumentoComponent } from './componente/admin/monumento/monumento.component';
import { UsuarioComponent } from './componente/admin/usuario/usuario.component';
import { NivelAdminComponent } from './componente/admin/nivel-admin/nivel-admin.component';
import { CreateComponent } from './componente/admin/monumento/create/create.component';
import { ModifyComponent } from './componente/admin/monumento/modify/modify.component';
import { DeleteComponent } from './componente/admin/monumento/delete/delete.component';
import { DeleteUsuarioComponent } from './componente/admin/usuario/delete-usuario/delete-usuario.component';
import { CreateNivelComponent } from './componente/admin/nivel-admin/create-nivel/create-nivel.component';
import { ModifyNivelComponent } from './componente/admin/nivel-admin/modify-nivel/modify-nivel.component';
import { DeleteNivelComponent } from './componente/admin/nivel-admin/delete-nivel/delete-nivel.component';
import { SomosComponent } from './componente/texto/somos/somos.component';
import { FacemosComponent } from './componente/texto/facemos/facemos.component';
import { ContactoComponent } from './componente/texto/contacto/contacto.component';

//servicio de cookies
import { CookieService } from 'ngx-cookie-service';


@NgModule({
  declarations: [
    AppComponent,
    PedepaxinaComponent,
    IndexComponent,
    CabeceiraComponent,
    UIUserComponent,
    NivelComponent,
    RexistroComponent,
    AdminComponent,
    MonumentoComponent,
    UsuarioComponent,
    NivelAdminComponent,
    CreateComponent,
    ModifyComponent,
    DeleteComponent,
    DeleteUsuarioComponent,
    CreateNivelComponent,
    ModifyNivelComponent,
    DeleteNivelComponent,
    SomosComponent,
    FacemosComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    }),
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
