import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private CS: CookieService, private router: Router) { }

  URL = 'http://localhost:3000';
  // URL = 'https://juegoplataforma.azurewebsites.net';

  login(login: any): Observable<Request> {
    return this.http.post<Request>(
      `${this.URL}/users/login`, login
    );
  }
  
  registro(registro: any): Observable<Request> {
    return this.http.post<Request>(
      `${this.URL}/users/create`, registro
    );
  }

  cerrarSesion(){
    this.CS.deleteAll();
    this.router.navigate(['/login']);
  }

  updateImg(url: any, id: any){
    return this.http.put(`${this.URL}/users/img/${id}`, url);
  }

  codigo(to: any){
    return this.http.get(`https://mudate.000webhostapp.com/correonew.php?to=${to}&from=farmacogame@braquetes.mx`);
  }

  registrarCodigo(codigo: any, correo: any){
    return this.http.put(`${this.URL}/users/codigo/${correo}`, codigo);
  }

  comprobar(correo: any){
    return this.http.get(`${this.URL}/users/comprobar/${correo}`);
  }

  restaurar(form: any, correo: any){
    return this.http.put(`${this.URL}/users/restaurar/${correo}`, form);
  }

}
