import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { tokenJwt } from '../../../auth/interfaces/jsonTokenJwt.interface';
import { AuthService } from '../../../auth/services/auth.service';
import { ValidatorsService } from '../../../services/validators.service';
import { CreateProducto } from '../../interfaces/producto.interface';
import { convertirFecha } from '../../pipes/convertirFecha';
import { getCurrentTimeInFormat } from '../../pipes/obtenerHoraActual';

@Component({
  selector: 'app-form-crear-producto',
  templateUrl: './form-crear-producto.component.html',
  styleUrl: './form-crear-producto.component.css'
})
export class FormCrearProductoComponent implements OnInit {
  // todo hacer un input para saber cuando es para editar y para
  @Output() onFormProduct: EventEmitter<CreateProducto> = new EventEmitter<CreateProducto>();

  private authService = inject(AuthService);
  private fb = inject(FormBuilder);
  private valitarorsService = inject(ValidatorsService);

  public dateMax: string = '';
  public horaActual: string = '';
  public token: tokenJwt = this.authService.getToken;

  public myFormProduct: FormGroup = this.fb.group({
    nombre_product: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(48)]],
    precio_base: ['', [Validators.required]],
    antiguedad: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(28)]],
    imagen: ['assets/imgs/producto.jpeg', [Validators.required, Validators.minLength(3), Validators.maxLength(248)]],
    descripcion: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(158)]],
    cantidad: ['', [Validators.required]],
    estado_mostrador: ['', [Validators.required]],
    fecha_subasta: ['', [Validators.required]],
    hora_subasta: ['', [Validators.required]],
    fk_categoria: ['', [Validators.required]],
    fk_rango_precio: ['', [Validators.required]],
    fk_user: ['', [Validators.required]],
    fk_ubicacion: ['', [Validators.required]],
  });

  isValidField(field: string) {
    return this.valitarorsService.isValidField(this.myFormProduct, field);
  }

  getFieldError(field: string) {
    return this.valitarorsService.getFieldError(this.myFormProduct, field);

  }

  ngOnInit(): void {
    let fechaActual = new Date().toLocaleDateString('es-CO', { timeZone: 'America/Bogota' });
    const fecha = convertirFecha(fechaActual);
    this.dateMax = fecha;
    this.horaActual = getCurrentTimeInFormat();
    this.myFormProduct.controls['fecha_subasta'].setValue(fecha);
    this.myFormProduct.controls['hora_subasta'].setValue(this.horaActual);
    this.myFormProduct.controls['fk_user'].setValue(this.token.user.id);
  }

  onSubmit() {
    if (this.myFormProduct.invalid) {
      this.myFormProduct.markAllAsTouched();
    } else {
      this.onFormProduct.emit(this.myFormProduct.value);
    }
  }


}
