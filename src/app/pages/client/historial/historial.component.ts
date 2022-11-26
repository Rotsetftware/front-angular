import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from 'src/app/providers/api.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss']
})
export class HistorialComponent implements OnInit {

  matricula: any;
  historial: any;
  precision: any = [];
  niveles: any;
  juegos: any;
  sumaPuntos = 0;
  total = 0;
  puntuacion = 0;

  constructor(private api: ApiService, private CS: CookieService) { }

  ngOnInit(): void {
   this.matricula = this.CS.get('matricula');
   this.getHistorialUser();
   this.getJuegos();
   this.getNiveles();
  }

  getNiveles(){
    this.api.getNiveles().subscribe((data: any) => {this.niveles = data});
  }
  
  getJuegos(){
    this.api.getJuegos().subscribe((data: any) => {this.juegos = data});
  }

  trunc (x: any, posiciones = 0) {
    var s = x.toString()
  var l = s.length
  var decimalLength = s.indexOf('.') + 1

  if (l - decimalLength <= posiciones){
    return x
  }
  // Parte decimal del número
  var isNeg  = x < 0
  var decimal =  x % 1
  var entera  = isNeg ? Math.ceil(x) : Math.floor(x)
  // Parte decimal como número entero
  // Ejemplo: parte decimal = 0.77
  // decimalFormated = 0.77 * (10^posiciones)
  // si posiciones es 2 ==> 0.77 * 100
  // si posiciones es 3 ==> 0.77 * 1000
  var decimalFormated = Math.floor(
    Math.abs(decimal) * Math.pow(10, posiciones)
  )
  // Sustraemos del número original la parte decimal
  // y le sumamos la parte decimal que hemos formateado
  var finalNum = entera + 
    ((decimalFormated / Math.pow(10, posiciones))*(isNeg ? -1 : 1))
  
  return finalNum
  }

  getHistorialUser(){
    this.api.getHistorial(this.matricula).subscribe((data: any)=>{
      console.log(data);
      this.historial = data;
      for(const val of data){

        this.puntuacion = this.puntuacion + val.puntajeTotal;
        console.log(this.puntuacion);
        

        const totalPreguntas = val.correctas+val.incorrectas;
        if(totalPreguntas == 0){console.log('void');
        }else{
        const porcentajeJuego = val.correctas * 100 / totalPreguntas;
        this.precision.push(this.trunc(porcentajeJuego)); 
        }
      }
      const puntosTotales = this.precision.length*100;
      for(const val of this.precision){
        this.sumaPuntos = this.sumaPuntos + val;}
        if(this.sumaPuntos == 0){console.log('void');}else{
      }
      this.total = this.sumaPuntos * 100 / puntosTotales;
      console.log(this.total);
    });
  }

}
