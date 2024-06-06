import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import Swal from 'sweetalert2';
import { ProductoPorUsuario } from '../../interfaces/producto.interface';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-list-productos-por-usuario',
  templateUrl: './list-productos-por-usuario.component.html',
  styleUrl: './list-productos-por-usuario.component.css'
})
export class ListProductosPorUsuarioComponent {

  @Input({ required: true }) productos: ProductoPorUsuario[] = [];
  @Output() onListProducts: EventEmitter<void> = new EventEmitter<void>();

  private productoService = inject(ProductoService);

  eliminarProducto(id: number, nameProduct: string) {
    Swal.fire({
      title: '¿Eliminar Producto?',
      text: `${nameProduct}`,
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar',
    }).then((result) => {
      if (result.isConfirmed) {

        this.productoService.eliminarProducto(id)
          .subscribe({
            next: (response) => {
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: `${response.message}`,
                showConfirmButton: true,
                confirmButtonColor: '#3085d6',
              });
              this.onListProducts.emit();
            },
            error: (err) => {
              console.log(err);
            },
          });
      }
    });
  }

}
