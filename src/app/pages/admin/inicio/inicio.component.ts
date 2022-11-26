import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  nombres: any;
  apellidos: any;
  img: any;

  constructor(private router: Router, private CS: CookieService) { }

  ngOnInit(): void {
    this.nombres = this.CS.get('nombres');
    this.apellidos = this.CS.get('apellidos');
    this.img = this.CS.get('img');
  }

  nivel = () => {
    this.router.navigate(['niveles',]);
  }

}
