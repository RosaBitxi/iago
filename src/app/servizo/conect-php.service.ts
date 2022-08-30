import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Monumento } from '../clase/Monumento';
import { Nivel } from '../clase/Nivel';
import { Usuario } from '../clase/Usuario';

@Injectable({
  providedIn: 'root'
})
export class ConectPHPService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient, private cookies: CookieService) { }

  getMonumentos(): Observable<any> {
    //obten todos os monumentos
    return this.http.get<any>(`${this.baseUrl}/server/monumentoGetAll.php`);
  }

  getUsuarios(): Observable<any> {
    //obten todos os usuarios
    return this.http.get<any>(`${this.baseUrl}/server/usuarioGetAll.php`);
  }

  getNiveles(): Observable<any> {
    //obten todos os niveles
    return this.http.get<any>(`${this.baseUrl}/server/nivelGetAll.php`);
  }

  addMonumento(monumento: Monumento) : Observable<any> {
    //Para introducir un novo monumento na BBDD
    return this.http.post<any>(`${this.baseUrl}/server/monumentoPost.php`,monumento);
  }

  addUsuario(usuario: Usuario): Observable<any> {
    //para introducir un novo usuario na BBDD
    return this.http.post<any>(`${this.baseUrl}/server/usuarioPost.php`,usuario);
  }

  addNivel(nivel: Nivel) {
    //para introducir un novo nivel na BBDD
    return this.http.post<any>(`${this.baseUrl}/server/nivelPost.php`,nivel);
  }

  /*
  subirImaxe(file: File) : Observable<any> {
    //para mover a imaxe a unha carpeta dentro de assets
    return this.http.post<any>(`${this.baseUrl}/server/monumentoUploadImage.php`, file);
  }
*/
  deleteMonumento(monumento: Monumento) {
    //para eliminar un monumento
    return this.http.get<any>(`${this.baseUrl}/server/monumentoDelete.php?nomeMonumento=${monumento.nome}`);
  }

  deleteUsuario(usuario: Usuario) {
    //para eliminar un usuario
    return this.http.get<any>(`${this.baseUrl}/server/usuarioDelete.php?nomeUsuario=${usuario.alias}`);
  }

  deleteNivel(nivel: Nivel) {
    //para eliminar un nivel
    return this.http.get<any>(`${this.baseUrl}/server/nivelDelete.php?nomeNivel=${nivel.nome}`);
  }

  updateMonumento(monumento: Monumento) {
    //para modificar un monumento
    return this.http.put<any>(`${this.baseUrl}/server/monumentoUpdate.php`, monumento);
  }

  updateNivel(nivel: Nivel) {
    //para modificar un nivel
    return this.http.put<any>(`${this.baseUrl}/server/nivelUpdate.php`, nivel);
  }

  //login usuario
  login(usuario: Usuario): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/server/login.php`, usuario);
  }

  //obter o usuario
  getUsuario(id: any): Observable<any> {
  return this.http.get<any>(`${this.baseUrl}/server/usuarioGet.php?id=${id}`);
 }

 //obter o nivel
 getNivel(id: any): Observable<any> {
  return this.http.get<any>(`${this.baseUrl}/server/nivelGet.php?id=${id}`);
 }

 //obter o Monumento
 getMonumento(id: any): Observable<any> {
  return this.http.get<any>(`${this.baseUrl}/server/monumentoGet.php?id=${id}`);
 }

  updateUsuarioNivel(idUsuario: any, idNivel: any) {
  //para modificar algun cambio no xogo
    return this.http.put<any>(`${this.baseUrl}/server/xogadorNivelUpdate.php`, idUsuario, idNivel);
  }

  //obter o Nivel polo ID de usuario
  getUsuarioNivel(id: any): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/server/xogadorNivelGet.php?id=${id}`);
  }

}
