import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from "@ionic/angular";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import { arrowBackOutline } from 'ionicons/icons';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, ReactiveFormsModule]
})
export class RegistroPage implements OnInit {


  registroForm!: FormGroup;

  constructor(private fb: FormBuilder,private router: Router) {
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
      console.log('Formulario válido', this.registroForm.value);
    } else {
      console.log('Formulario inválido');
      this.registroForm.markAllAsTouched(); // Muestra errores al usuario
    }
  }

  irAlLogin(){
    this.router.navigateByUrl('/login', { replaceUrl: true });
  }


}
