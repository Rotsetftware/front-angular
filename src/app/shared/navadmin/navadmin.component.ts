import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/providers/auth.service';

@Component({
  selector: 'app-navadmin',
  templateUrl: './navadmin.component.html',
  styleUrls: ['./navadmin.component.scss']
})
export class NavadminComponent implements OnInit {

  constructor(private AS: AuthService) { }

  ngOnInit(): void {
  }

  salir(){
    this.AS.cerrarSesion();
  }

}
