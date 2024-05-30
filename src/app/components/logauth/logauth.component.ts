import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { tokenJwt } from '../../auth/interfaces/jsonTokenJwt.interface';
import { AuthService } from '../../auth/services/auth.service';
import { PrimengModule } from '../../primeng/primeng.module';

@Component({
  selector: 'app-logauth',
  standalone: true,
  imports: [CommonModule, PrimengModule],
  templateUrl: './logauth.component.html',
  styleUrl: './logauth.component.css'
})
export class LogauthComponent {
  @Input({ required: true }) token!: tokenJwt;

  public AuthService = inject(AuthService);
  public modalLougt: boolean = false;

  openModal() {
    this.modalLougt = true;
  }
  logout() {
    this.AuthService.logout();
  }

}
