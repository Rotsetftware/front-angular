import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Nivel } from 'src/app/models/nivel';
import { ApiService } from 'src/app/providers/api.service';

@Component({
  selector: 'app-nivel',
  templateUrl: './nivel.component.html',
  styleUrls: ['./nivel.component.scss']
})
export class NivelComponent implements OnInit {

  niveles: any;

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.getNiveles();
  }

  getNiveles(){
    this.api.getNiveles().subscribe((data: Nivel) => {
      console.log(data);
      this.niveles = data;
    });
  }

  seleccion(id: number){
    this.router.navigate(['/juegos/',id]);
  }

}
