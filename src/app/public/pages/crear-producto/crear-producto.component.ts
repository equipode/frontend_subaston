import { Component, inject } from '@angular/core';
import Swal from 'sweetalert2';
import { CreateProducto } from '../../interfaces/producto.interface';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrl: './crear-producto.component.css'
})
export class CrearProductoComponent {

  private productoService = inject(ProductoService);

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

}
