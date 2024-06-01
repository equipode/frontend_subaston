import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { tokenJwt } from '../../../auth/interfaces/jsonTokenJwt.interface';
import { AuthService } from '../../../auth/services/auth.service';
import { Producto, ResponseProduct } from '../../interfaces/producto.interface';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent implements OnInit, OnDestroy {

  private authService = inject(AuthService);
  private productoService = inject(ProductoService);
  public token: tokenJwt = this.authService.getToken;

  public productosSubastas: Producto[] = [];

  private intervalId: any;

  ngOnInit(): void {
    this.listadoProductos();
  }

  listadoProductos() {
    this.productoService.listProductos().subscribe({
      next: (resp: ResponseProduct) => {

        this.productosSubastas = resp.message;
        this.startCountdown();
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  private startCountdown() {
    this.intervalId = setInterval(() => {
      // Esto forzará una actualización del pipe countdown para cada producto
      this.productosSubastas = [...this.productosSubastas];
    }, 1000);
  }


  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }


}
