import { Component, inject } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms'
import { AuthService } from '../../services/auth.services';
import { CredencialesUsuarioDTO, RespuestaAutenticacionDTO } from "../../DTOs/auth";
import { Router } from '@angular/router';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatIconModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private readonly formbuilder= inject(FormBuilder);
  private readonly dialog = inject(MatDialog);
  form = this.formbuilder.group({
    user:['', {validators: [Validators.required]}],
    password: ['', {validators: [Validators.required]}]
  })
  hide: boolean = true;
  hide2: boolean = true;
  authService = inject(AuthService)


  
  constructor(private readonly router: Router){
    
  }

  obtenerErrorCampoUser(): string {
    let user = this.form.controls.user;
    if(user.hasError('required'))
    {
      return "El campo usuario es requerido"
    }
    return "";
  }
  obtenerErrorCampoContrasena(): string {
    let user = this.form.controls.password;
    if(user.hasError('required'))
    {
      return "El campo contraseña es requerido"
    }
    return "";
  }

  validarLogin()
  {
    const user: CredencialesUsuarioDTO = {
      username: this.form.controls['user']?.value?.toString() || '',
      password: this.form.controls['password']?.value?.toString() || ''
    };
    this.authService.login(user).subscribe({
      next: response => this.router.navigate(['/inventory']),
      error: err => this.dialog.open(DialogError)
    });
  }
}

@Component({
  selector: 'dialog-error',
  templateUrl: 'dialog-error.html',
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule],
})
export class DialogError {}
