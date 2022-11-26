import { Component, OnInit } from '@angular/core';
import { FilesService } from 'src/app/providers/files.service';

@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html',
  styleUrls: ['./imagenes.component.scss']
})
export class ImagenesComponent implements OnInit {
  img:Array<any> | undefined;
  seg:number = 30;
  url = 'http://localhost/videojuego/subidas/';
  constructor(private imgServices: FilesService) { }

  ngOnInit() {
    this.getImagenes();
    setInterval(()=> {
      this.getImagenes();
    },30000);
    setInterval(()=>{
      if(this.seg == 1){
        this.seg = 30;
      }else{
        this.seg --;
      }
    },1000);
    
  }
  getImagenes(){
    this.imgServices.cualImagen().subscribe(
      resp =>{
        if(resp.status){
          this.img = resp.img;
        }else{
          alert(resp.msg);
        }
      }
    );
  }

}
