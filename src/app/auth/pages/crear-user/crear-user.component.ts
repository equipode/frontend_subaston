import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ValidatorsService } from '../../../services/validators.service';
import { Auth } from '../../interfaces/auth.interface';
import { tokenJwt } from '../../interfaces/jsonTokenJwt.interface';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-crear-user',
  templateUrl: './crear-user.component.html',
  styleUrl: './crear-user.component.css'
})
export class CrearUserComponent {

  private authService = inject(AuthService);
  private router = inject(Router);
  private fb = inject(FormBuilder);
  private valitarorsService = inject(ValidatorsService);

  public urlLogoEmpresa = 'assets/icons/logo.jpg';
  public loading = signal<boolean>(false);
  public messageLoading = signal<string>('');

  public myForm: FormGroup = this.fb.group({
    usuario: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(98), Validators.pattern(this.valitarorsService.emailPattern)]],
    nit: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
    contrasenia: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(98)]],
    foto_perfil: ['assets/imgs/producto.jpeg', [Validators.required, Validators.maxLength(250)]],
    fk_rol: [1, [Validators.required]],
  });

  isValidField(field: string) {
    return this.valitarorsService.isValidField(this.myForm, field);
  }

  getFieldError(field: string) {
    return this.valitarorsService.getFieldError(this.myForm, field);

  }

  loginSesion(user: string, contrasenia: string) {
    this.messageLoading.set('loading');
    this.loading.set(true);

    const credents: Auth = {
      usuario: user,
      contrasenia: contrasenia
    }
    console.log(credents);
    this.authService.login(credents).subscribe({
      next: (response) => {
        this.loading.set(false);
        this.authService.setCambiarRol = response.tipo_rol;
        const responses: tokenJwt = response;
        localStorage.removeItem('tokenSys');
        localStorage.setItem('tokenSys', JSON.stringify(responses));

        this.authService.isAuthenticated = true;
        this.router.navigate(['./home']);

      },
      error: (err) => {
        this.loading.set(false);
      }
    })
  }


  crearCuenta() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
    } else {
      this.messageLoading.set('Creando Cuenta');
      this.loading.set(true);
      this.authService.crearUser(this.myForm.value).subscribe({
        next: (response) => {
          this.loading.set(false);
          Swal.fire({
            position: 'center',
            icon: 'info',
            title: `${response.message}`,
            showConfirmButton: false,
            timer: 800
          });

          this.loginSesion(this.myForm.value.usuario, this.myForm.value.contrasenia);
          this.myForm.reset();
        },
        error: (err) => {
          this.loading.set(false);

        }
      })
    }
  }

  login() {
    this.router.navigate(['./login']);
  }
}
