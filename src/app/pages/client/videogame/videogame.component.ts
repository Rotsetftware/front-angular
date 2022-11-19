import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from 'src/app/providers/api.service';
import { SocketService } from 'src/app/providers/socket.service';

@Component({
  selector: 'app-videogame',
  templateUrl: './videogame.component.html',
  styleUrls: ['./videogame.component.scss']
})
export class VideogameComponent implements OnInit , AfterViewInit, OnDestroy{

  room: any;
  idPreguntas: any;
  usuario: Array<any> = [];
  play: any;
  sala: any;
  pre: any;
  tiempoA = 3;
  tiempo = 15;
  tiempoReal = 0;
  array: any [] = [];
  preguntas: any;
  orden: any;
  xd: any;
  rank: any;
  final: any;
  finJuego: any;
  salir: any;

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
      this.almacenarUsuario(res);
    });
  }
  
  emitirUsuario(res: any){
    console.log(res);
    this.SC.emitEvent(res);
    this.SC.emitEvent({id: this.idPreguntas});
  }

  almacenarUsuario(res: any){
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
        this.CS.set('preguntas',JSON_string);
      for(const val of this.preguntas){
        console.log(val);
      }
    });
    console.log(this.room);
  }

  pregunts(res: any){
    for(const val of res){
      this.array.push(val.idPregunta);
      this.array.sort(function() { return Math.random() - 0.5 });
    }
    console.log(this.array)
  }

  prueba(res: any){
    console.log(res);
  }

  finalizar(){
    this.SC.emitEvent({final: true});
    this.rank = false;
    this.final = true;
    this.finJuego = false;
    this.salir = true;
  }

  exit(){
    this.SC.emitEvent({router: true});
    this.router.navigate(['/estadisticas']);
  }

  siguiente(){
    this.rank = false;
    this.play = false;
    console.log('Siguiente');
    this.CS.delete('orden');
    this.CS.set('orden',this.array[this.array.length-1]);
    this.SC.emitEvent({data: 'siguiente', orden: this.array[this.array.length-1]});
    this.API.getPreguntasId(this.idPreguntas).subscribe((data: any) => {
      this.xd = data;
      for(const val of this.xd){
        if(val.idPregunta == this.array[this.array.length-1]){
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
    if(this.array.length == 1){
      this.orden = undefined;
      this.finJuego = true;
    }
  }

  boton(){
    this.CS.set('orden',this.array[this.array.length-1]);
    this.SC.emitEvent({play:true,coockie: this.idPreguntas, orden: this.array[this.array.length-1]});
    this.API.getPreguntasId(this.idPreguntas).subscribe((data: any) => {
      this.xd = data;
      for(const val of this.xd){
        if(val.idPregunta == this.array[this.array.length-1]){
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
          console.log(this.tiempoA)
          if (this.tiempoA === 0){ clearInterval(intervalId); this.pre = false; this.play = true; this.time();}
        }, 1000)
    // this.router.navigate(['/comienzajuego']);
  }

  time() {
    let intervalId = setInterval(() => {
      this.tiempoReal = this.tiempoReal - 1;
      console.log(this.tiempoReal)
      if (this.tiempoReal === 0){clearInterval(intervalId); this.play = false; this.rank = true;     this.SC.emitEvent({rank: true});
    }
    }, 1000)
  }

}
