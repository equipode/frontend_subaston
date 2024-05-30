import { Component, inject } from '@angular/core';
import { tokenJwt } from '../../../auth/interfaces/jsonTokenJwt.interface';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {

  private authService = inject(AuthService);
  public token: tokenJwt = this.authService.getToken;

  public productosSubastas = [];


}
