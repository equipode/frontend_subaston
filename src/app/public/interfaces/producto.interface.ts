export interface ResponseProduct {
  status: string;
  message: Producto[];
}

export interface Producto {
  pk_prod: number;
  nombre_product: string;
  imagen: string;
  precio_base: number;
  fecha_subasta: Date;
  hora_subasta: string;
  nit: string;
}

export interface InfoProductoPorUsuario {
  status: string;
  message: ProductoPorUsuario[];
}

export interface ProductoPorUsuario {
  pk_prod: number;
  nombre_product: string;
  precio_base: number;
  antiguedad: string;
  imagen: string;
  descripcion: string;
  cantidad: number;
  estado_mostrador: number;
  fecha_subasta: Date;
  hora_subasta: string;
  fk_categoria: number;
  fk_rango_precio: number;
  fk_user: number;
  fk_ubicacion: number;
  createAt: Date;
  updateAt: Date;
}


export interface CreateProducto {
  nombre_product: string,
  precio_base: number,
  antiguedad: string,
  imagen: string,
  descripcion: string,
  cantidad: number,
  estado_mostrador: number,
  fecha_subasta: string,
  hora_subasta: string,
  fk_categoria: number,
  fk_rango_precio: number,
  fk_user: number,
  fk_ubicacion: number
}

export interface ResponseCreateProduct {
  status: string;
  message: string;
  data: any;
}

export interface ResponseProductoEliminado {
  status: string;
  message: string;
}
