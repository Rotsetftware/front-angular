import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/providers/auth.service';

@Component({
  selector: 'app-navjuego',
  templateUrl: './navjuego.component.html',
  styleUrls: ['./navjuego.component.scss']
})
export class NavjuegoComponent implements OnInit {
  
  tipoUsuario: any;

  constructor(private router: Router, private CS: CookieService) { }

  ngOnInit(): void {
    if(this.CS.get('tipoUsuario') != null){
      this.tipoUsuario = this.CS.get('tipoUsuario');
    }
  }

  salir(){
    if(this.tipoUsuario == 1){
      this.router.navigate(['/inicio']);
    }else if(this.tipoUsuario == 2){
      this.router.navigate(['/home']);
    }
  }


}
