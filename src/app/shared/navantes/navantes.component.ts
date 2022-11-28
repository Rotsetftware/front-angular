import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-navantes',
  templateUrl: './navantes.component.html',
  styleUrls: ['./navantes.component.scss']
})
export class NavantesComponent implements OnInit {
  tipoUsuario: any;

  constructor(private CS: CookieService) { }

  ngOnInit(): void {
    if(this.CS.get('tipoUsuario') != null){
      this.tipoUsuario = this.CS.get('tipoUsuario');
    }else{
      this.tipoUsuario = 0;
    }
  }
}