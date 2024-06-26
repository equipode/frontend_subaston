import { Component, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { tokenJwt } from '../../../auth/interfaces/jsonTokenJwt.interface';
import { AuthService } from '../../../auth/services/auth.service';
import { Producto, ResponseProduct } from '../../interfaces/producto.interface';
import { ResponseUsersLineaSubasta } from '../../interfaces/subasta.interface';
import { ProductoService } from '../../services/producto.service';
import { SocketService } from '../../services/socket.service';
import { SubastaService } from '../../services/subasta.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent implements OnInit, OnDestroy {

  private authService = inject(AuthService);
  private productoService = inject(ProductoService);
  private subastaService = inject(SubastaService);
  private socketService = inject(SocketService);

  public token: tokenJwt = this.authService.getToken;

  public productosSubastas: Producto[] = [];
  public usuariosEnLinea = signal<number>(0);

  private intervalId: any;

  public mostrarSubastasLinea = signal<boolean>(false);
  public mostrarSubastasEnEspera = signal<boolean>(true);

  ngOnInit(): void {
    this.listadoProductos();
    this.totalUsuariosLinea();
    this.socketService.on('nuevo_producto').subscribe((producto) => {
      console.log(producto);
      this.listadoProductos();
    });
  }

  listadoProductos() {
    this.productosSubastas = [];
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

  totalUsuariosLinea() {
    this.subastaService.totalUsuariosEnLinea().subscribe({
      next: (resp: ResponseUsersLineaSubasta) => {

        this.usuariosEnLinea.set(resp.message);

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

  public mostrarSubastasEnLinea() {
    this.mostrarSubastasEnEspera.set(false);
    this.mostrarSubastasLinea.set(true);
  }

  public mostrarSubastasEnEsperas() {
    this.mostrarSubastasLinea.set(false);
    this.mostrarSubastasEnEspera.set(true);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }


}
