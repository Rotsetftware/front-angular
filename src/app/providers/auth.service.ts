import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

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

}
