import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/providers/auth.service';

@Component({
  selector: 'app-navjuego',
  templateUrl: './navjuego.component.html',
  styleUrls: ['./navjuego.component.scss']
})
export class NavjuegoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  salir(){
    this.router.navigate(['/home']);
  }

}
