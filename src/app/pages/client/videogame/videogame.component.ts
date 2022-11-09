import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { SocketService } from 'src/app/providers/socket.service';

@Component({
  selector: 'app-videogame',
  templateUrl: './videogame.component.html',
  styleUrls: ['./videogame.component.scss']
})
export class VideogameComponent implements OnInit , AfterViewInit{

  room: any;
  idPreguntas: any;
  usuario: Array<any> = [];

  ngAfterViewInit(): void {
    this.render();
  }

  private render(): any {

  }

  constructor(private AR: ActivatedRoute, private CS: CookieService, private SC: SocketService, private router: Router) {
    this.SC.outEven.subscribe(res => {
      this.almacenarUsuario(res);
    });
  }
  
  emitirUsuario(res: any){
    console.log(res);
    this.SC.emitEvent(res);
  }

  almacenarUsuario(res: any){
    console.log(res.usuario);
    this.usuario.push(res.usuario);
    this.emitirUsuario(this.usuario);
  }

  ngOnInit(): void {
    this.room = this.AR.snapshot.paramMap.get('room');
    this.idPreguntas = this.CS.get('idPreguntas');
    console.log(this.room);
  }

  prueba(res: any){
    console.log(res);
  }

  boton(){
    this.SC.emitEvent({play:true,coockie: this.idPreguntas});
    this.router.navigate(['/comienzajuego']);
  }
}
