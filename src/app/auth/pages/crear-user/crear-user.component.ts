import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-user',
  templateUrl: './crear-user.component.html',
  styleUrl: './crear-user.component.css'
})
export class CrearUserComponent {

  private router = inject(Router);

  public urlLogoEmpresa = 'assets/icons/logo.jpg';


  crearCuenta() {

  }

  login() {
    this.router.navigate(['./login']);
  }
}
