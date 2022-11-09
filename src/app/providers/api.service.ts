import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Juego } from '../models/juego';
import { Nivel } from '../models/nivel';
import { Pregunta } from '../models/pregunta';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  URL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getJuegos(): Observable<Juego>{
    return this.http.get<Juego>(`${this.URL}/juegos/get`);
  }

  getJuegosId(id: number): Observable<Juego>{
    return this.http.get<Juego>(`${this.URL}/juegos/${id}`);
  }

  getNiveles(): Observable<Nivel> {
    return this.http.get<Nivel>(`${this.URL}/niveles/get`);
  }

  getNivelesId(id: number): Observable<Nivel> {
    return this.http.get<Nivel>(`${this.URL}/niveles/${id}`);
  }
  
  getPreguntas(): Observable<Pregunta> {
    return this.http.get<Pregunta>(`${this.URL}/preguntas/get`);
  }
  
  getPreguntasId(id: number): Observable<Pregunta> {
    return this.http.get<Pregunta>(`${this.URL}/preguntas/${id}`);
  }

  insertHistorial(form: any){
    return this.http.post(`${this.URL}/historial/create`,form);
  }
  
  getHistorial(sala: any){
    return this.http.get<Nivel>(`${this.URL}/historial/${sala}`);
  }

}
