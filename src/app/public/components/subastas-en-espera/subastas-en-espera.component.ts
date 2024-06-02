import { Component, Input } from '@angular/core';
import { Producto } from '../../interfaces/producto.interface';

@Component({
  selector: 'app-subastas-en-espera',
  templateUrl: './subastas-en-espera.component.html',
  styleUrl: './subastas-en-espera.component.css'
})
export class SubastasEnEsperaComponent {

  @Input({ required: true }) subastasEnEspera: Producto[] = [];

}
