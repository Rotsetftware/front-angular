import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from 'src/app/providers/api.service';
import { AuthService } from 'src/app/providers/auth.service';

@Component({
  selector: 'app-form-perfil',
  templateUrl: './form-perfil.component.html',
  styleUrls: ['./form-perfil.component.scss']
})
export class FormPerfilComponent implements OnInit {
  id: any;

  usuario = {
    idUsuario: '',
    nombres: '',
    apellidos: '',
    img: '',
    carrera: '',
    matricula: '',
    celular: '',
    correo: '',
    password: '********'
  };

  constructor(private fb: FormBuilder, private router: Router, private api: ApiService, private CS: CookieService, private AR: ActivatedRoute, private AS: AuthService) { }

  ngOnInit(): void {

    this.id = this.AR.snapshot.params['id'];
    console.log(this.id);
    this.getOneUser(this.id);

  }

  getOneUser(id: any){
    this.api.getUserId(id).subscribe((data: any) => {
      console.log(data);
      this.usuario = data;
    });
  }

  eliminarFoto(){
    this.api.deleteImg(this.id).subscribe((data: any) => {
      console.log(data);
      this.getOneUser(this.id);
    });
  }

  update(){
    console.log('Update');
    console.log(this.usuario);
    this.AS.updateUser(this.usuario,this.id).subscribe((data: any) => {
      console.log(data);
      if(data.status == 'Usuario actualizado'){
        this.getOneUser(this.id);
      }else{
        alert(data.status);
      }
    });
  }

}