import { Component } from '@angular/core';
import { CreateProducto } from '../../interfaces/producto.interface';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrl: './crear-producto.component.css'
})
export class CrearProductoComponent {

  crearProducto(producto: CreateProducto) {
    console.log(producto);
  }

}
