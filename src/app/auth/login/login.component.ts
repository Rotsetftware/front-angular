import { AuthService } from 'src/app/providers/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  emailCheck= '^[a-z0-9._*+-]+@[a-z0-9.-]+\\.[a-z]{2,5}$';

  emailReq(){
    return this.miFormulario.controls['correo']?.errors?.['required'] &&
           this.miFormulario.controls['correo']?.touched;
  }
  
  emailPattern(){
    return this.miFormulario.controls['correo']?.errors?.['pattern'] &&
           this.miFormulario.controls['correo']?.touched;
  }
  
    miFormulario: FormGroup = this.fb.group({
      correo: ['',[Validators.required]],
      password: ['',[Validators.required, Validators.minLength(8)]]
    });
  
    constructor(private fb: FormBuilder, private CS: CookieService, private router: Router, private AS: AuthService) { }
  
    ngOnInit(): void {
  
      this.miFormulario.setValue({
        correo: '',
        password: '',
      });
  
      if(this.CS.get('access_token')){
        this.router.navigate(['/home']);
      } 
    }
  
    campoValido(campo: string){
      return this.miFormulario.controls[campo].errors 
            && this.miFormulario.controls[campo].touched;
  
    }
  
    save(){
      console.log(this.miFormulario.value);
      this.AS.login(this.miFormulario.value).subscribe((data: any) =>{
        console.log(data);
        if(data){
          this.CS.set('access_token', 'qwertyuiop');
          this.CS.set('idUsuario', data.idUsuario);
          this.CS.set('nombres', data.nombres);
          this.CS.set('apellidos', data.apellidos);
          this.CS.set('matricula', data.matricula);
          this.CS.set('tipoUsuario', data.tipoUsuario);
          this.CS.set('correo', data.correo);
          this.CS.set('img', data.img);
          if(data.tipoUsuario == 2){
            this.router.navigate(['/home']);
          }else if(data.tipoUsuario == 1){
            this.router.navigate(['/inicio']);
          }
        }
      });
    }
  

}
