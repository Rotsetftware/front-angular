import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from 'src/app/providers/api.service';
import { SocketService } from 'src/app/providers/socket.service';

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
  xdxd: any;
  xdxdxd: any;

  orden: any;

  tiempo: any;

  admin = true;

  respondio = false;
  selected = 0;

  idUsuario: any;

  constructor(private CS: CookieService, private API: ApiService, private SWS: SocketService) { }

  ngOnInit(): void {
    const coockie = this.CS.get('preguntas');
    const JSobj = JSON.parse(coockie);
    this.xd = JSobj;
    console.log(this.xd);
    
    if(this.CS.get('tipoUsuario') == '2'){
      const cocs = this.CS.get('equipo');
      const JSobjE = JSON.parse(cocs);
      this.xdxd = JSobjE;
      console.log(this.xdxd);
      this.admin = false;
    }

    this.orden = this.CS.get('orden');
    this.idUsuario = this.CS.get('idUsuario');
    console.log(this.idUsuario);
    // console.log(this.orden);
    // this.idP = this.CS.get('idPreguntas');
    // // console.log(this.idP);
    // this.API.getPreguntasId(this.idP).subscribe((data: any) => {
    //   console.log(data);
    //   this.xd = data;
    // });
    // this.time();
  }

  resp(res: any, resC: any){
    this.selected = res;
    this.respondio = true;
    console.log('res: ' + res);
    console.log('resc: ' + resC);
    if(res == resC){
      this.SWS.emitEvent({ respuesta: 'correcto', equipo: this.xdxd.equipo, puntos: 0});
    }else{
      this.SWS.emitEvent({ respuesta: 'incorrecto', equipo: this.xdxd.equipo, puntos: 0});
    }
  }

  pregunts(res: any){
    for(const val of res){
      this.array.push(val.idPregunta);
      this.array.sort(function() { return Math.random() - 0.5 });
    }
    console.log(this.array)
  }

}