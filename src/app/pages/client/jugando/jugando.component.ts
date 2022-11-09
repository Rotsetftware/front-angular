import { AfterViewInit, Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
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

  constructor(private SWS: SocketService, private AR: ActivatedRoute, private CS: CookieService, private router: Router) {
    this.SWS.outEven.subscribe(res => {
      const { play, coockie } = res;
      if(play){
        CS.set('idPreguntas',coockie);
        router.navigate(['/comienzajuego']);
      }
      this.detectarUsuario(res);
    });
  }

  detectarUsuario(res: any) {
    console.log(res);
    this.usuario = res;

  }

  ngOnInit(): void {
    this.room = this.AR.snapshot.paramMap.get('room');
    console.log(this.room);
    const coockie = this.CS.get('equipo');
    const JSobj = JSON.parse(coockie);
    this.datas = JSobj;
    this.usuario.push(this.datas.equipo);
    this.SWS.emitEvent({ usuario: this.datas.equipo});
  }

  prueba(res: any) {
    console.log(res);
  }

  boton() {
    this.SWS.emitEvent({ play: true });
  }

}
