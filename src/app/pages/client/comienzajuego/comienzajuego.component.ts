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
  respuesta1: any;
  respuesta2: any;
  respuesta3: any;
  respuesta4: any;

  idP: any;

  xd: any;

  tiempo: any;

  constructor(private CS: CookieService, private API: ApiService) { }

  ngOnInit(): void {
    this.idP = this.CS.get('idPreguntas');
    this.API.getPreguntasId(this.idP).subscribe((data: any) => {
      console.log(data[0]);
      this.xd = data;
    });
    // this.time();
  }

  time() {
    let intervalId = setInterval(() => {
      this.tiempo = this.xd.tiempo*1;
      this.tiempo = this.tiempo - 1;
      console.log(this.tiempo)
      if (this.tiempo === 0) clearInterval(intervalId)
    }, 1000)
  }

}
