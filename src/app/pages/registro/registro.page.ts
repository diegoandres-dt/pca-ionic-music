import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from "@ionic/angular";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import { arrowBackOutline } from 'ionicons/icons';
import { Router } from '@angular/router';
import { AuthenticatorServiceService } from 'src/app/services/authenticator-service.service';
import { SnackBarComponent } from 'src/app/components/snack-bar/snack-bar.component';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, ReactiveFormsModule, SnackBarComponent]
})
export class RegistroPage implements OnInit {


  registroForm!: FormGroup;
  mostrarSnackBar: boolean = false;
  tituloSnack: string = '¡Logueado con éxito!';
  mensajeSnack: string = 'Bienvenido a Vibra, disfruta de la mejor música';
  tipoSnack: any = 'success';
  iconSnack: string = 'checkmark-circle-outline';
  isLoading = false;

  constructor(private fb: FormBuilder, private router: Router, private authenticatorService: AuthenticatorServiceService) {
    addIcons({ arrowBackOutline });
    this.registroForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
    });
  }


  ngOnInit() {
  }

  onSubmit() {
    if (this.registroForm.valid) {
      const password = this.registroForm.get('password')?.value;
      const email = this.registroForm.get('email')?.value;
      const nombre = this.registroForm.get('nombre')?.value;
      const username = this.registroForm.get('apellido')?.value;
      let user: any = {
        user: {
          "email": email,
          "password": password,
          "name": nombre,
          "username": username
        }
      }
      this.isLoading = true;
      this.authenticatorService.registro(user).subscribe({
        next: (data) => {
          console.log(data);
          this.tipoSnack = 'success';
          this.tituloSnack = '¡Registrado con éxito!';
          this.mensajeSnack = 'Ingrese las credenciales para continuar ';
          this.mostrarSnackBar = true;
          this.isLoading = false;
          setTimeout(() => {
            this.mostrarSnackBar = false;
            this.router.navigateByUrl('/login', { replaceUrl: true });
          }, 3000);
        },
        error: (error) => {
          console.error(error);
          this.tipoSnack = 'error';
          this.tituloSnack = 'Error al registrar';
          this.mensajeSnack = 'Verifica tus datos e intenta nuevamente.';
          this.iconSnack = 'close-circle-outline';
          this.mostrarSnackBar = true;
          this.isLoading = false;

          setTimeout(() => {
            this.mostrarSnackBar = false;
          }, 8000);
        }
      });
    } else {
      console.log('Formulario inválido');
      this.registroForm.markAllAsTouched();
    }
  }

  irAlLogin() {
    this.router.navigateByUrl('/login', { replaceUrl: true });
  }


}