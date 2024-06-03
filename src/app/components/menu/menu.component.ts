import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { MegaMenuItem } from 'primeng/api';
import { tokenJwt } from '../../auth/interfaces/jsonTokenJwt.interface';
import { AuthService } from '../../auth/services/auth.service';
import { PrimengModule } from '../../primeng/primeng.module';
import { LogauthComponent } from '../logauth/logauth.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, PrimengModule, LogauthComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export default class MenuComponent implements OnInit {

  private router = inject(Router);
  private authservice = inject(AuthService);
  public items = signal<MegaMenuItem[] | undefined>([]);
  public token: tokenJwt = this.authservice.getToken;

  ngOnInit(): void {
    // console.log(this.token);
    this.items.set([
      {
        label: 'Principal',
        icon: 'pi pi-briefcase',
        command: () =>
          this.router.navigate(['./home/principal'])
      },
      {
        label: 'Subastar Producto',
        icon: 'pi pi-box',
        // command: () =>
        //   this.router.navigate(['./admind/create_product'])
      },
      {
        label: 'Mensajes',
        icon: 'pi pi-envelope',
        // command: () =>
        //   this.router.navigate(['./admind/lisProduct'])
      },
    ])

  }
}
