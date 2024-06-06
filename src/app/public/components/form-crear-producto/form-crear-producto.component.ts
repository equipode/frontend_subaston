import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { tokenJwt } from '../../../auth/interfaces/jsonTokenJwt.interface';
import { AuthService } from '../../../auth/services/auth.service';
import { ValidatorsService } from '../../../services/validators.service';
import { Categoria, InfoCategoria } from '../../interfaces/categoria.interface';
import { CreateProducto } from '../../interfaces/producto.interface';
import { InfoRangoPrecio, RangoPrecio } from '../../interfaces/rango_precio.interface';
import { convertirFecha } from '../../pipes/convertirFecha';
import { getCurrentTimeInFormat } from '../../pipes/obtenerHoraActual';
import { CategoriaService } from '../../services/categoria.service';
import { RangoPrecioService } from '../../services/rango_precio.service';

@Component({
  selector: 'app-form-crear-producto',
  templateUrl: './form-crear-producto.component.html',
  styleUrl: './form-crear-producto.component.css'
})
export class FormCrearProductoComponent implements OnInit {
  // todo hacer un input para saber cuando es para editar y para
  @Output() onFormProduct: EventEmitter<CreateProducto> = new EventEmitter<CreateProducto>();

  private authService = inject(AuthService);
  private categoriaService = inject(CategoriaService);
  private rangoPrecioService = inject(RangoPrecioService);
  private fb = inject(FormBuilder);
  private valitarorsService = inject(ValidatorsService);

  public dateMax: string = '';
  public horaActual: string = '';
  public token: tokenJwt = this.authService.getToken;

  public categorias: Categoria[] = [];
  public rango_precios: RangoPrecio[] = [];

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
    this.datosPalFormulario();
    this.listadoCategorias();
    this.listadoRangoPrecios();
  }

  datosPalFormulario() {
    let fechaActual = new Date().toLocaleDateString('es-CO', { timeZone: 'America/Bogota' });
    const fecha = convertirFecha(fechaActual);
    this.dateMax = fecha;
    this.horaActual = getCurrentTimeInFormat();
    this.myFormProduct.controls['fecha_subasta'].setValue(fecha);
    this.myFormProduct.controls['hora_subasta'].setValue(this.horaActual);
    this.myFormProduct.controls['fk_user'].setValue(this.token.user.id);
  }

  listadoCategorias() {
    this.categorias = [];
    this.categoriaService.listCategorias().subscribe({
      next: (infoCategor: InfoCategoria) => {
        this.categorias = infoCategor.message;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  listadoRangoPrecios() {
    this.rango_precios = [];
    this.rangoPrecioService.listRangoPrecios().subscribe({
      next: (infoRango: InfoRangoPrecio) => {
        this.rango_precios = infoRango.message;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  onSubmit() {
    if (this.myFormProduct.invalid) {
      this.myFormProduct.markAllAsTouched();
    } else {
      this.onFormProduct.emit(this.myFormProduct.value);
    }
  }


}
