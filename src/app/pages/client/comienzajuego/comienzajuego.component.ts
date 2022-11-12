import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from 'src/app/providers/api.service';

@Component({
  selector: 'app-comienzajuego',
  templateUrl: './comienzajuego.component.html',
  styleUrls: ['./comienzajuego.component.scss']
})
export class ComienzajuegoComponent implements OnInit {

  pregunta: any;
  preguntas: any;
  respuesta1: any;
  respuesta2: any;
  respuesta3: any;
  respuesta4: any;

  array: any [] = [];

  idP: any;

  xd: any;
  orden: any;

  tiempo: any;

  constructor(private CS: CookieService, private API: ApiService) { }

  ngOnInit(): void {
    this.orden = this.CS.get('orden');
    console.log('orden');
    console.log(this.orden);
    this.idP = this.CS.get('idPreguntas');
    // console.log(this.idP);
    this.API.getPreguntasId(this.idP).subscribe((data: any) => {
      console.log(data);
      this.xd = data;
    });
    // this.time();
  }

  pregunts(res: any){
    for(const val of res){
      this.array.push(val.idPregunta);
      this.array.sort(function() { return Math.random() - 0.5 });
    }
    console.log(this.array)
  }

}