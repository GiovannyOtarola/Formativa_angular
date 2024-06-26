import { Component, AfterViewInit, Inject, PLATFORM_ID,OnInit  } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router'; 
import { JsonService } from '../services/json.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, RouterModule,ReactiveFormsModule,HttpClientModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.scss',
  providers: [JsonService]
})
export class RegistroComponent implements OnInit {
  registroForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router,private jsonService: JsonService) {
    this.registroForm = this.fb.group({
      nombre_completo: ['', Validators.required],
      usuario: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      fecha_nacimiento: ['', [Validators.required, this.edadMinimaValidator(13)]],
      direccion_despacho: ['', Validators.required],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[0-9])(?=.*[A-Z]).{6,18}$/)]],
      confirm_password: ['', Validators.required]
    }, { validators: this.passwordMatchValidator });
  }

  ngOnInit(): void { }


  onSubmit(): void {
    if (this.registroForm.valid) {
      const userData = this.registroForm.value;

      // Obtener la lista de usuarios desde el JSON usando JsonService
      this.jsonService.getJsonData().subscribe(
        listaUsuarios => {
          listaUsuarios = listaUsuarios ? listaUsuarios : [];// Manejar caso de lista vacía

          // Agregar el nuevo usuario a la lista
          listaUsuarios.push(userData);

          // Guardar la lista actualizada en el JSON
          this.jsonService.MetodoUsuario(listaUsuarios);

          console.log('Datos guardados en JSON:', listaUsuarios);
          
          // Redirigir a la página de login
          this.router.navigate(['/login']);
        },
        error => {
          console.error('Error al obtener los datos de usuario',error);

        }
      );

    } else {
      // Mostrar mensajes de error
      this.registroForm.markAllAsTouched();
    }
  }

 
  passwordMatchValidator(group: AbstractControl): ValidationErrors | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirm_password')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  
  edadMinimaValidator(edadMinima: number) {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) return null;
      const today = new Date();
      const birthDate = new Date(control.value);
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age < edadMinima ? { edadMinima: true } : null;
    };
  }
}