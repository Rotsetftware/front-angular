import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/providers/auth.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  emailCheck= '^[a-z0-9._*+-]+@[a-z0-9.-]+\\.[a-z]{2,5}$';

  passReq(){
      return this.miFormulario.controls['confirmPassword']?.errors?.['required'] &&
             this.miFormulario.controls['confirmPassword']?.touched && 
             this.miFormulario.controls['contraseña']?.touched;
    }
  
  emailReq(){
    return this.miFormulario.controls['correo']?.errors?.['required'] &&
           this.miFormulario.controls['correo']?.touched;
  }
  
  emailPattern(){
    return this.miFormulario.controls['correo']?.errors?.['pattern'] &&
           this.miFormulario.controls['correo']?.touched;
  }
  
    matchPass(ctrl: FormControl){
      const pass = ctrl.get('password')?.value;
      const confirmPass = ctrl.get('confirmPassword')?.value;
      if(pass != confirmPass){
        ctrl.get('confirmPassword')?.setErrors({cpass: true});
      }
    }
  
    miFormulario: FormGroup = this.fb.group({
      nombres: ['',[Validators.required]],
      tipoUsuario: ['',[Validators.required]],
      apellidos: ['',[Validators.required]],
      matricula: ['',[Validators.required]],
      correo: ['',[Validators.required]],
      password: ['',[Validators.required, Validators.minLength(8)]],
      confirmPassword: ['',[Validators.required]]},{
      validators: this.matchPass
    });
  
    constructor(private fb: FormBuilder, private CS: CookieService, private router: Router, private AS: AuthService) { }
  
    ngOnInit(): void {
  
      this.miFormulario.setValue({
        nombres: '',
        tipoUsuario: 2,
        apellidos: '',
        matricula: '',
        correo: '',
        password: '',
        confirmPassword: ''
      });
  
      // if(this.CS.get('access_token')){
      //   this.router.navigate(['/home']);
      // } 
    }
  
    campoValido(campo: string){
      return this.miFormulario.controls[campo].errors 
            && this.miFormulario.controls[campo].touched;
  
    }
  
    save(){
      console.log(this.miFormulario.value);
      this.AS.registro(this.miFormulario.value).subscribe((data: any) => {

        if(data.status == 'Usuario registrado'){
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Registro completado',
            showConfirmButton: false,
            timer: 1500
          });
          this.router.navigate(['/login']);
        }else{
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: data.status,
            showConfirmButton: false,
            timer: 1500
          });
        }

        console.log(data);
        if(data.status == 'User Saved'){
          this.router.navigate(['/login']);
        }
      });
    }
  
  }