import { AfterViewInit, Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from 'src/app/providers/api.service';
import { SocketService } from 'src/app/providers/socket.service';

@Component({
  selector: 'app-jugando',
  templateUrl: './jugando.component.html',
  styleUrls: ['./jugando.component.scss']
})
export class JugandoComponent implements OnInit {

  room: any;
  datas: any;
  idPreguntas: any;
  usuario: Array<any> = [];
  play: boolean | undefined;
  sala: any;
  pre: any;
  tiempoA = 3;
  tiempoReal = 0;
  rank: any;
  final: any;

  array: any [] = [];

  idP: any;

  xd: any;
  orden: any;

  constructor(private SWS: SocketService, private AR: ActivatedRoute, private CS: CookieService, private API: ApiService, private router: Router) {
    this.SWS.outEven.subscribe(res => {
      const { play, coockie, orden, data, rank, final, router} = res;
      if(router){
        this.router.navigate(['/estadisticas']);
      } else if(final){
        this.final = true;
        this.rank = false;
      }else if(rank){
        this.rank = true;
      } else if(data){
        this.rank = false;
        this.API.getPreguntasId(this.idP).subscribe((data: any) => {
          this.xd = data;
          for(const val of this.xd){
            if(val.idPregunta == orden){
            console.log(val.tiempo);
            this.tiempoReal = val.tiempo;
            }
          }
        });
        console.log('orden');
        CS.delete('orden');
        CS.set('orden',orden);
        this.play = true;
        this.time();
      }else if(play){
        this.API.getPreguntasId(this.idP).subscribe((data: any) => {
          this.xd = data;
          for(const val of this.xd){
            if(val.idPregunta == orden){
            console.log(val.tiempo);
            this.tiempoReal = val.tiempo;
            }
          }
        });
        console.log(orden);
        this.sala = false;
        CS.set('idPreguntas',coockie);
        CS.set('orden',orden);
        this.pre = true;
        let intervalId = setInterval(() => {
          this.tiempoA = this.tiempoA - 1;
          console.log(this.tiempoA)
          if (this.tiempoA === 0){ clearInterval(intervalId); this.pre = false; this.play = true; this.time();
          }
        }, 1000)
        // router.navigate(['/comienzajuego']);
      }else{
        this.detectarUsuario(res);
      }
    });
  }

  detectarUsuario(res: any) {
    console.log(res);
    this.usuario = res;

  }

  ngOnInit(): void {
    this.idP = this.CS.get('idPreguntas');
    this.sala = true;
    this.room = this.AR.snapshot.paramMap.get('room');
    console.log(this.room);
    const coockie = this.CS.get('equipo');
    const JSobj = JSON.parse(coockie);
    this.datas = JSobj;
    this.usuario.push(this.datas.equipo);
    this.SWS.emitEvent({ usuario: this.datas.equipo});

    // this.orden = this.CS.get('orden');
    // console.log('orden');
    // console.log(this.orden);
    // this.idP = this.CS.get('idPreguntas');
    // // console.log(this.idP);
    // this.API.getPreguntasId(this.idP).subscribe((data: any) => {
    //   console.log(data);
    //   this.xd = data;
    // });
  }

  time() {
    let intervalId = setInterval(() => {
      this.tiempoReal = this.tiempoReal - 1;
      console.log(this.tiempoReal)
      if (this.tiempoReal === 0){clearInterval(intervalId); this.play = false;}
    }, 1000)
  }

  prueba(res: any) {
    console.log(res);
  }

  boton() {
    this.SWS.emitEvent({ play: true });
  }

}
