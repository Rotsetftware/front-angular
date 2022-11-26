import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/providers/auth.service';

@Component({
  selector: 'app-perfil-admin',
  templateUrl: './perfil-admin.component.html',
  styleUrls: ['./perfil-admin.component.scss']
})
export class PerfilAdminComponent implements OnInit {

  usuario = {
    nombre: '',
    img: '',
    carrera: '',
    matricula: '',
    celular: '',
    correo: '',
    password: '********'
  };

  constructor(private fb: FormBuilder, private router: Router, private AS: AuthService, private CS: CookieService) { }

  ngOnInit(): void {

    this.usuario.nombre = this.CS.get('nombres') + ' ' + this.CS.get('apellidos');
    this.usuario.img = this.CS.get('img');
    // this.usuario.carrera = this.CS.get('carrera');
    this.usuario.matricula = this.CS.get('matricula');
    // this.usuario.celular = this.CS.get('celular');
    this.usuario.correo = this.CS.get('correo');

    if (this.usuario.nombre == 'null null null') {
      this.usuario.nombre = 'Completa tu registro'
      this.usuario.img = 'Completa tu registro'
      this.usuario.carrera = 'Completa tu registro'
      this.usuario.matricula = 'Completa tu registro'
      this.usuario.celular = 'Completa tu registro'
    }

  }

  restaurar(){
    this.CS.deleteAll();
    this.router.navigate(['/recuperar']);
  }

}