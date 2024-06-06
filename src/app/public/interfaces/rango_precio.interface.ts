export interface InfoRangoPrecio {
  status: string;
  message: RangoPrecio[];
}

export interface RangoPrecio {
  pk_rango: number;
  rango: number;
  createAt: Date;
  updateAt: Date;
}
