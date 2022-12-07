import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-finaljuego',
  templateUrl: './finaljuego.component.html',
  styleUrls: ['./finaljuego.component.scss']
})
export class FinaljuegoComponent implements OnInit {

  constructor(private router: Router, private  CS: CookieService) { }

  ngOnInit(): void {
    if(this.CS.get('tipoUsuario') == '1'){
      this.router.navigate(['/inicio']);
    }else{
      this.router.navigate(['/login']);
    }
  }

}
