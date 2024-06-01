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

