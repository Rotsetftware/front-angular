import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

interface Equipo {
  puntajeTotal: number;
  fecha: string;
  matriculas: Matricula[];
  equipo: string;
  sala: string;
}

interface Matricula {
  id: number;
  matricula: string;
}

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.scss']
})
export class EquipoComponent implements OnInit {

  room = {
    codigo: ''
  };
  data: any;
  dia: any;

  constructor(private CS: CookieService, private router: Router) { }

  ngOnInit(): void {
    if(this.CS.get('equipo')){
      const coockie = this.CS.get('equipo');
      const JSobj = JSON.parse(coockie);
      this.equipo = JSobj;
      console.log(this.equipo);
    }
  }

  unirse(){
    console.log(this.room);
    this.CS.delete('room');
    this.CS.set('room',this.room.codigo);
    this.router.navigate(['/jugando/', this.room.codigo]);
  }

  newHab : string = '';

  equipo: Equipo = {
    puntajeTotal: 0,
    fecha: '',
    matriculas: [],
    equipo: '',
    sala: ''

  }

  save(){
    console.log(this.equipo);
    const JSON_string = JSON.stringify(this.equipo);
    this.CS.set('equipo',JSON_string);
    this.router.navigate(['/unirme']);
  }

  eliminar(index: number){
    this.equipo.matriculas.splice(index,1)
  }

  addHab(){
  const result = this.equipo.matriculas.filter( (n: any, i: any) =>{ return n.matricula == this.newHab;})
  console.log(result);  
  if(result.length > 0){
    alert('Registrado');
    }else{
      const newHab: Matricula = {
        id: this.equipo.matriculas.length + 1,
        matricula: this.newHab
      }
      this.equipo.matriculas.push({...newHab});
      this.newHab = '';
    }
  }
}