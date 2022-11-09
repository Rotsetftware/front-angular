import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {

  seleccion: any;

  constructor() { }

  ngOnInit(): void {
    this.seleccion = '';
  }

  accesorio(id: any): void{
    switch(id){
      case 1: 
        this.seleccion = 'sombrero';
      break;
      case 2: 
        this.seleccion = 'tenis';
      break;
      case 3: 
        this.seleccion = 'corbata';
      break;
      default: 
      console.log('error');
      break;  
    }
  }

}
