import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/providers/auth.service';
import { FilesService } from 'src/app/providers/files.service';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.scss']
})
export class EditarPerfilComponent implements OnInit {
  trueimg:Boolean = false;
  loader:Boolean = false;
  myimg = {
    url: ''
  };
  final:Boolean = true;
  msn:string | undefined;
  url = 'http://localhost/videojuego/subidas/';
  id: any;

  constructor(private subir: FilesService, private AS: AuthService, private CS: CookieService, private router: Router) { }

  ngOnInit() {
    this.msn = "Subir una imagen no mayor de 10MB";
    this.id = this.CS.get('idUsuario');
    console.log(this.id);
  }
  
  subiendoando(ev: any){
    let img:any = ev.target;
    if(img.files.length > 0){
      console.log(img.files);
      this.loader = true;
      let form = new FormData();
      form.append('file',img.files[0]);
      this.subir.subirImagen(form).subscribe(
        resp => {
          console.log(resp);
          
          this.loader = false;
          if(resp.status){
            this.trueimg = true;
            this.myimg.url = this.url+resp.generatedName;
            this.CS.delete('img');
            this.CS.set('img', this.myimg.url);
            this.msn = "Gracias por visitar unprogramador.com";
            console.log(this.myimg);
            this.AS.updateImg(this.myimg,this.id).subscribe((data: any) => {
              console.log(data);
              this.router.navigate(['/perfil']);
            });
            // this.desaparece();
          }
        },
        error => {
          this.loader = false;
          alert('Imagen supera el tamaño permitido');
          
        }
      );

    }

  }
  desaparece(){
    let sto = setTimeout(()=>{
      this.trueimg = false;
      clearTimeout(sto);
    },20000)
  }


}
