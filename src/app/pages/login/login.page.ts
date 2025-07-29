import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from "@ionic/angular";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticatorServiceService } from 'src/app/services/authenticator-service.service';
import { SnackBarComponent } from 'src/app/components/snack-bar/snack-bar.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, ReactiveFormsModule, SnackBarComponent]
})
export class LoginPage implements OnInit {

  loginForm!: FormGroup;
  mostrarSnackBar: boolean = false;
  tituloSnack: string = '¡Logueado con éxito!';
  mensajeSnack: string = 'Bienvenido a Vibra, disfruta de la mejor música';
  tipoSnack: any = 'success';
  iconSnack: string = 'checkmark-circle-outline';
  isLoading = false;


  constructor(private fb: FormBuilder, private router: Router, private authenticatorService: AuthenticatorServiceService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }


  ngOnInit() {
  }

  onSubmit() {
    if (this.loginForm.valid) {
        const password = this.loginForm.get('password')?.value;
        const email = this.loginForm.get('email')?.value;
        let user: any = {
          user: {
            "email": email,
            "password": password
          }
        }
        this.isLoading = true;
        this.authenticatorService.login(user).subscribe({
          next: (data) => {
            this.tipoSnack = 'success';
            this.tituloSnack = '¡Logueado con éxito!';
            this.mensajeSnack = 'Bienvenido a Vibra, disfruta de la mejor música ';
            this.mostrarSnackBar = true;
            this.isLoading = false;
            setTimeout(() => {
              this.mostrarSnackBar = false;
              localStorage.setItem('login', 'true');
              this.router.navigateByUrl('/home', { replaceUrl: true });
            }, 3000); 
          },
          error: (error) => {
            console.error(error);
            this.tipoSnack = 'error';
            this.tituloSnack = 'Error al iniciar sesión';
            this.mensajeSnack = 'Verifica tus credenciales e intenta nuevamente.';
            this.mostrarSnackBar = true;
            this.isLoading = false;
            this.iconSnack = 'close-circle-outline';
            setTimeout(() => {
              this.mostrarSnackBar = false;
            }, 8000);
          }
        });
      } else {
        this.loginForm.markAllAsTouched();
      }
  }

  irAlRegistro() {
    this.router.navigateByUrl('/registro', { replaceUrl: true });
  }

}