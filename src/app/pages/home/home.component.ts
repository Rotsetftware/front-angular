import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from 'src/app/providers/api.service';
import { AuthService } from 'src/app/providers/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  room = {
    codigo: ''
  };

  nombres: any;
  apellidos: any;
  img: any;
  juegos: any;

  constructor(private router: Router, private CS: CookieService, private api: ApiService) { }
  
  ngOnInit(): void {
    this.CS.delete('idPreguntas');
    this.CS.delete('orden');
    this.CS.delete('preguntas');
    this.CS.delete('room');
    this.nombres = this.CS.get('nombres');
    this.apellidos = this.CS.get('apellidos');
    this.img = this.CS.get('img');
    this.getJuegos();
  }

  getJuegos(){
    this.api.getJuegos().subscribe((data) => {
      console.log(data);
      this.juegos = data;
    });
  }

  sala = () => {
    this.router.navigate(['sala/xd',]);
  }

  nivel = () => {
    this.router.navigate(['niveles',]);
  }

  unirse(){
    console.log(this.room);
    this.CS.delete('room');
    this.CS.set('room',this.room.codigo);
    this.router.navigate(['/jugando/', this.room.codigo]);
  }

  unir(){
    this.router.navigate(['/equipo']);
  }

  biblioteca(){
    this.router.navigate(['/biblioteca']);
  }

}
