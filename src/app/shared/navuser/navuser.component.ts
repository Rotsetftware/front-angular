import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/providers/auth.service';

@Component({
  selector: 'app-navuser',
  templateUrl: './navuser.component.html',
  styleUrls: ['./navuser.component.scss']
})
export class NavuserComponent implements OnInit {

  constructor(private AS: AuthService) { }

  ngOnInit(): void {
  }

  salir(){
    this.AS.cerrarSesion();
  }

}
