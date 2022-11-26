import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.scss']
})
export class EstadisticasComponent implements OnInit {

  id: any;

  constructor(private CS: CookieService) { }

  ngOnInit(): void {
    this.CS.delete('idPreguntas');
    this.CS.delete('orden');
    this.CS.delete('preguntas');
    this.CS.delete('room');
    this.id = this.CS.get('tipoUsuario');
  }

}
