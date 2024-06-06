import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import Swal from 'sweetalert2';
import { tokenJwt } from '../../../auth/interfaces/jsonTokenJwt.interface';
import { AuthService } from '../../../auth/services/auth.service';
import { CreateProducto, ProductoPorUsuario } from '../../interfaces/producto.interface';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrl: './crear-producto.component.css'
})
export class CrearProductoComponent implements OnInit, OnDestroy {

  private authService = inject(AuthService);
  private productoService = inject(ProductoService);

  public token: tokenJwt = this.authService.getToken;
  public productos: ProductoPorUsuario[] = [];

  private intervalId: any;

  ngOnInit(): void {
    this.listProductos();
  }

  listProductos() {
    this.productos = [];
    this.productoService.listProductosPorUsuario(this.token.user.id).subscribe({
      next: (res) => {
        this.productos = res.message;
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
      this.productos = [...this.productos];
    }, 1000);
  }

  crearProducto(producto: CreateProducto) {
    this.productoService.saveProducto(producto).subscribe({
      next: (res) => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: `${res.message}`,
          showConfirmButton: false,
          timer: 1000
        });
        this.listProductos();
      },
      error: (err) => {
        if (err.status === 400) {
          Swal.fire({
            position: 'center',
            icon: 'info',
            title: `${err.error.message}`,
            showConfirmButton: false,
            timer: 1000
          });
        }
      }
    })
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

}
