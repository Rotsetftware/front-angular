import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from 'src/app/providers/api.service';
import { SocketService } from 'src/app/providers/socket.service';

interface Ranking {
  equipos: Equipos[];
}

interface Equipos {
  respuesta: string;
  equipo: string;
  puntos: number;
}

@Component({
  selector: 'app-videogame',
  templateUrl: './videogame.component.html',
  styleUrls: ['./videogame.component.scss']
})
export class VideogameComponent implements OnInit, AfterViewInit, OnDestroy {

  ranking: Ranking = {
    equipos: []
  };

  room: any;
  idPreguntas: any;
  usuario: Array<any> = [];
  play: any;
  sala: any;
  pre: any;
  tiempoA = 3;
  tiempo = 15;
  tiempoReal = 0;
  array: any[] = [];
  preguntas: any;
  orden: any;
  xd: any;
  rank: any;
  final: any;
  finJuego: any;
  salir: any;

  i = 0;
  j = 0;

  ngAfterViewInit(): void {
    this.sala = true;
    this.render();
  }

  ngOnDestroy(): void {
  }

  private render(): any {

  }

  constructor(private AR: ActivatedRoute, private CS: CookieService, private SC: SocketService, private API: ApiService, private router: Router) {
    this.SC.outEven.subscribe(res => {
      const { respuesta, idUsuario, equipo } = res;
      if (respuesta) {
        const result = this.ranking.equipos.filter((n: any) => { return n.equipo == equipo;})
        console.log(result);

        if (result.length > 0) {
          this.i = 0;
          this.j = 0;
          for(const val of this.ranking.equipos){
            if(val.equipo == equipo){
              console.log('Equipo existente: ' + val.equipo);
              console.log('Valor de i: ' + this.i);
              if(respuesta == 'correcto'){
                this.ranking.equipos[this.j].puntos = this.ranking.equipos[this.j].puntos + 1;
                this.ranking.equipos[this.j].respuesta = 'correcto';
              }else{
                console.log('error');
              }
            }
            this.i = this.i+1;
            this.j = this.j+1;
          }
          
          const JSON_string = JSON.stringify(this.ranking);
          CS.delete('rank');
          CS.set('rank', JSON_string);
          this.SC.emitEvent({ ranking: this.ranking });
          
        } else {
          if(respuesta == 'correcto'){
            this.ranking.equipos.push({ respuesta: respuesta, equipo: equipo, puntos: 1});
          }else{
            this.ranking.equipos.push({ respuesta: respuesta, equipo: equipo, puntos: 0});
          }
          const JSON_string = JSON.stringify(this.ranking);
          CS.set('rank', JSON_string);
          this.SC.emitEvent({ ranking: this.ranking });
        }

      } else {
        this.almacenarUsuario(res);
      }
    });
  }

  emitirUsuario(res: any) {
    console.log(res);
    this.SC.emitEvent(res);
    this.SC.emitEvent({ id: this.idPreguntas });
  }

  almacenarUsuario(res: any) {
    console.log(res.usuario);
    this.usuario.push(res.usuario);
    this.emitirUsuario(this.usuario);
  }

  ngOnInit(): void {
    this.orden = undefined;
    this.sala = true;
    this.room = this.AR.snapshot.paramMap.get('room');
    this.idPreguntas = this.CS.get('idPreguntas');
    this.API.getPreguntasId(this.idPreguntas).subscribe((data: any) => {
      console.log(data);
      this.preguntas = data;
      this.pregunts(this.preguntas);
      const JSON_string = JSON.stringify(data);
      this.CS.set('preguntas', JSON_string);
      for (const val of this.preguntas) {
        console.log(val);
      }
    });
    console.log(this.room);
  }

  pregunts(res: any) {
    for (const val of res) {
      this.array.push(val.idPregunta);
      this.array.sort(function () { return Math.random() - 0.5 });
    }
    console.log(this.array)
  }

  prueba(res: any) {
    console.log(res);
  }

  finalizar() {
    this.SC.emitEvent({ final: true });
    this.rank = false;
    this.final = true;
    this.finJuego = false;
    this.salir = true;
  }

  exit() {
    this.SC.emitEvent({ router: true });
    this.router.navigate(['/estadisticas']);
  }

  siguiente() {
    this.rank = false;
    this.play = false;
    console.log('Siguiente');
    this.CS.delete('orden');
    this.CS.set('orden', this.array[this.array.length - 1]);
    this.SC.emitEvent({ data: 'siguiente', orden: this.array[this.array.length - 1] });
    this.API.getPreguntasId(this.idPreguntas).subscribe((data: any) => {
      this.xd = data;
      for (const val of this.xd) {
        if (val.idPregunta == this.array[this.array.length - 1]) {
          console.log(val.tiempo);
          this.tiempoReal = val.tiempo;
          this.play = true;
        }
      }
      this.array.pop();
    });
    this.time();
    this.orden = this.CS.get('orden');
    console.log(this.array);
    if (this.array.length == 1) {
      this.orden = undefined;
      this.finJuego = true;
    }
  }

  boton() {
    this.CS.set('orden', this.array[this.array.length - 1]);
    this.SC.emitEvent({ play: true, coockie: this.idPreguntas, orden: this.array[this.array.length - 1] });
    this.API.getPreguntasId(this.idPreguntas).subscribe((data: any) => {
      this.xd = data;
      for (const val of this.xd) {
        if (val.idPregunta == this.array[this.array.length - 1]) {
          console.log(val.tiempo);
          this.tiempoReal = val.tiempo;
        }
      }
      this.array.pop();
    });
    // console.log(this.array);
    this.sala = false;
    this.pre = true;
    this.orden = this.CS.get('orden');
    let intervalId = setInterval(() => {
      this.tiempoA = this.tiempoA - 1;
      // console.log(this.tiempoA)
      if (this.tiempoA === 0) { clearInterval(intervalId); this.pre = false; this.play = true; this.time(); }
    }, 1000)
    // this.router.navigate(['/comienzajuego']);
  }

  time() {
    let intervalId = setInterval(() => {
      this.tiempoReal = this.tiempoReal - 1;
      // console.log(this.tiempoReal)
      if (this.tiempoReal === 0) {
        clearInterval(intervalId); this.play = false; this.rank = true; this.SC.emitEvent({ rank: true });
      }
    }, 1000)
  }

}
