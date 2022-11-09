import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/providers/api.service';
import { Juego } from 'src/app/models/juego';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.scss']
})
export class JuegoComponent implements OnInit {

  id: any;
  juegos: any;

  constructor(private router: Router, private AR: ActivatedRoute, private api: ApiService, private CS: CookieService) { }

  ngOnInit(): void {
    this.CS.delete('room');
    this.id = this.AR.snapshot.params['id'];
    console.log(this.id);
    this.getJuegos();
  }

  getJuegos(){
    this.api.getJuegosId(this.id).subscribe((data: Juego) => {
      console.log(data);
      this.juegos = data;
    });
  }

  seleccion(id: number){
    this.router.navigate(['/kahoot', id]);
  }

}
