import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Pregunta } from 'src/app/models/pregunta';
import { ApiService } from 'src/app/providers/api.service';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.scss']
})
export class PreguntaComponent implements OnInit {

  id: any;
  preguntas: any;
  tiempo = 1;
  array: any [] = [];

  constructor(private router: Router, private AR: ActivatedRoute, private api: ApiService, private CS: CookieService) { }

  ngOnInit(): void {
    this.id = this.AR.snapshot.params['id'];
    console.log(this.id);
    this.getPreguntas();
    // this.time();
  }

  // pregunts(res: any){
  //   for(const val of res){
  //     this.array.push(val.idPregunta);
  //     this.array.sort(function() { return Math.random() - 0.5 });
  //   }
  //   console.log(this.array)
  // }

  // random(){
  //   console.log(this.array[this.array.length-1]);
  //   this.array.pop();
  //   console.log(this.array);
  // }

  time() {
    let intervalId = setInterval(() => {
      this.CS.delete('room');
      this.tiempo = this.tiempo - 1;
      // console.log(this.tiempo)
      if (this.tiempo === 0) clearInterval(intervalId)
    }, 1000)
  }

  getUniqueId(parts: number): string {
    const stringArr = [];
    for(let i = 0; i< parts; i++){
      // tslint:disable-next-line:no-bitwise
      const S4 = (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
      stringArr.push(S4);
    }
    return stringArr.join('-');
  }

  getPreguntas(){
    this.api.getPreguntasId(this.id).subscribe((data: Pregunta) => {
      console.log(data);
      this.preguntas = data;
      // this.pregunts(this.preguntas);
    });
  }

  seleccion(){
    this.CS.delete('room');
    const val =  this.getUniqueId(2);
    this.CS.set('room',val);
    this.CS.set('idPreguntas',this.id);
    this.router.navigate(['/jugar/', val]);
  }

}
