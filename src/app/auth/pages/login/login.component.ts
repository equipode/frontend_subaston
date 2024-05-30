import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ValidatorsService } from '../../../services/validators.service';
import { isTokenExpired } from '../../guards/tokenExpiration.guard';
import { tokenJwt } from '../../interfaces/jsonTokenJwt.interface';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  private authtService = inject(AuthService);
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private valitarorsService = inject(ValidatorsService);

  public urlLogoEmpresa = 'assets/icons/logo.jpg';

  private loginSubscription!: Subscription;
  public errorMessageBolean = signal<boolean>(false);
  public errorMessage = signal<string>('');
  public loading = signal<boolean>(false);

  // COORDENADAS UBICACIÓN
  public latitude: number = 0;
  public longitude: number = 0;

  public myForm: FormGroup = this.fb.group({
    usuario: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100), Validators.pattern(this.valitarorsService.emailPattern)]],
    contrasenia: ['', [Validators.required, Validators.maxLength(100),]],
  });

  isValidField(field: string) {
    return this.valitarorsService.isValidField(this.myForm, field);
  }

  getFieldError(field: string) {
    return this.valitarorsService.getFieldError(this.myForm, field);

  }


  ngOnInit(): void {
    if (navigator.onLine) {
      const token = this.authtService.getToken;

      if (token) {
        const result = isTokenExpired(token.Token);
        if (!result) {
          this.router.navigate(['./home']);
        }
      }
    }

  }


  login(): void {
    this.errorMessageBolean.set(false);
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
    } else {
      const credents = this.myForm.value;
      if (navigator.onLine) {
        this.loading.set(true);
        this.loginSubscription = this.authtService.login(credents).subscribe({
          next: (response) => {
            this.loading.set(false);
            this.authtService.setCambiarRol = response.tipo_rol;
            const responses: tokenJwt = response;
            localStorage.setItem('tokenSys', JSON.stringify(responses));

            this.authtService.isAuthenticated = true;
            this.router.navigate(['./home']);

          },
          error: (err) => {
            this.loading.set(false);
            this.errorMessageBolean.set(true);
            this.errorMessage.set(err);
          }
        })
      } else {
        this.errorMessageBolean.set(true);
        this.errorMessage.set('No tienes Conexion a internet?');
      }

    }
  }

  ngOnDestroy() {
    if (this.loginSubscription) {

      this.loginSubscription.unsubscribe();
    }
  }

}
