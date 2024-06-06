import { Component, Input } from '@angular/core';
import { ProductoPorUsuario } from '../../interfaces/producto.interface';

@Component({
  selector: 'app-list-productos-por-usuario',
  templateUrl: './list-productos-por-usuario.component.html',
  styleUrl: './list-productos-por-usuario.component.css'
})
export class ListProductosPorUsuarioComponent {

  @Input({ required: true }) productos: ProductoPorUsuario[] = [];

}
