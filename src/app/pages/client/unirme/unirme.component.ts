import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from 'src/app/providers/api.service';

@Component({
  selector: 'app-unirme',
  templateUrl: './unirme.component.html',
  styleUrls: ['./unirme.component.scss']
})
export class UnirmeComponent implements OnInit {

  data: any;
  datas: any;

  room = {
    codigo: ''
  };

  constructor(private router: Router, private CS: CookieService, private API: ApiService) { }

  ngOnInit(): void {
    const coockie = this.CS.get('equipo');
    const JSobj = JSON.parse(coockie);
    this.data = JSobj;
    console.log(JSobj);
  }

  unirse() {
    this.CS.delete('room');
    this.CS.set('room', this.room.codigo);
    this.data.sala = this.room.codigo;
    const JSON_string = JSON.stringify(this.data);
    this.CS.set('equipo',JSON_string);
    const coockie = this.CS.get('equipo');
    const JSobj = JSON.parse(coockie);
    this.datas = JSobj;
    console.log(this.data);
    for(const val of this.datas.matriculas){
      this.datas.matricula   = val.matricula;
      this.API.insertHistorial(this.datas).subscribe((data: any) => {
        console.log(data);
      });
    }
    this.router.navigate(['/jugando/', this.room.codigo]);
  }

}
