import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  url = 'https://braquetes.mx/videojuego/subir.php';

  constructor( private http: HttpClient) {
  }
  subirImagen(datos:any):Observable<any>{
    return this.http.post(this.url, datos);
  }

  cualImagen():Observable<any>{
    return this.http.get(this.url);
  }

}
