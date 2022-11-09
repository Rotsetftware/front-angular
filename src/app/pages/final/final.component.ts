import { AfterViewInit, Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { HandshakeService } from 'src/app/providers/handshake.service';
import { RespuestaService } from 'src/app/providers/respuesta.service';
import { SocketService } from 'src/app/providers/socket.service';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.scss']
})
export class FinalComponent implements OnInit, AfterViewInit {


  private xd: Array<any> = [];

  textRes: any = '';
  variable1: any = '';
  variable2: any = '';

  @ViewChild('textoRef', { static: false }) textoRef: any;

  private letter: Array<any> = [];

  @HostListener('document:keydown', ['$event'])
  onKeyDown = (e: any) => {
    if (e.target.id == 'textoId') {
      console.log(e.key);
      if (e.key.length == 1) {
        if (e.key >= "A" && e.key <= "Z") {
          // console.log('Mayuscula: ' + e.key);
          e = { metada: e, key: e.key, y: 'mayuscula' };
          this.write(e);
        }
        if (e.key >= "a" && e.key <= "x") {
          // console.log('Minuscula: ' + e.key);
          e = { metada: e, key: e.key, y: 'minuscula' };
          this.write(e);
        }
        if (e.key >= "0" && e.key <= "9") {
          e = { metada: e, key: e.key, y: 'numero' };
          this.write(e);
        }

      }
      if (e.key == "Backspace") {
        e = { metada: e, key: e.key, y: 'eliminar' };
        this.write(e);
      }
      if (e.key == "ArrowRight") {
        e = { metada: e, key: e.key, y: 'derecha' };
        this.write(e);
      }
      if (e.key == "ArrowLeft") {
        e = { metada: e, key: e.key, y: 'izquierda' };
        this.write(e);
      }
      if (e.key == " ") {
        e = { metada: e, key: e.key, y: 'space' };
        this.write(e);
      }
    }
  }

  constructor(private SWS: SocketService, private HS: HandshakeService, private RS: RespuestaService) {
    this.SWS.outEven.subscribe(res => {
      const { tecla } = res;
      this.writeSingle(tecla, false);
    });
    this.HS.outEven.subscribe(res => {
      // this.HS.emitEvent('hola');
      this.prueba(res);
    });
    this.RS.outEven.subscribe(res => {
      // this.HS.emitEvent('hola');
      this.prueba(res);
    });
  }

  ngAfterViewInit(): void {
    this.render();
  }

  prueba(res: any){
    console.log(res);
  }

  private render(): any {

  }

  private write(res: any) {
    const tecla = {
      x: res.key,
      y: res.y
    }
    this.writeSingle(tecla);
  }

  private writeSingle(tecla: any, emit: Boolean = true) {
    this.letter.push(tecla);
    if (emit) {
      this.SWS.emitEvent({ tecla })
      this.HS.emitEvent({xd: '123'})
    } else {

      if (tecla.y == 'eliminar') {
        this.xd.pop();
        console.log(this.xd);
        for (const val of this.xd) {
          this.variable1 = '';
          this.variable1 = this.variable2;
          this.variable2 = '';
          this.variable2 = this.variable1 + val.x;
        }
        console.log(this.variable2);
        this.textRes = '';
        this.textRes = this.variable2;
        this.variable2 = '';
      } else {
        let xs = this.textRes;
        this.textRes = '';
        this.textRes = xs + tecla.x;
        this.xd.push(tecla);
      }
      console.log(this.xd);

    }
  }

  ngOnInit(): void { }

  boton(id: any): void {
    console.log(id);
    let actual = new Date();
    let hora = `${actual.getHours()}:` + `${actual.getMinutes()}:` + `${actual.getSeconds()}:` + `${actual.getMilliseconds()}`;
    this.RS.emitEvent({ id: id, hora: hora });
  }

}
