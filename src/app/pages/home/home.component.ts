import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  tiempo: number = 5;

  room = {
    codigo: ''
  };
  
  constructor(private router: Router, private CS: CookieService) { }
  
  ngOnInit(): void {
    this.time();
  }

  sala = () => {
    this.router.navigate(['sala/xd',]);
  }

  nivel = () => {
    this.router.navigate(['niveles',]);
  }

  time() {
    let intervalId = setInterval(() => {
      this.CS.deleteAll();
      this.tiempo = this.tiempo - 1;
      console.log(this.tiempo)
      if (this.tiempo === 0) clearInterval(intervalId)
    }, 1000)
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

}
