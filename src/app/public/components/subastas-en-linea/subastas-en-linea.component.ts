import { Component, Input } from '@angular/core';
import { Producto } from '../../interfaces/producto.interface';

@Component({
  selector: 'app-subastas-en-linea',
  templateUrl: './subastas-en-linea.component.html',
  styleUrl: './subastas-en-linea.component.css'
})
export class SubastasEnLineaComponent {
  @Input({ required: true }) subastasEnLinea: Producto[] = [];
}
