export interface InfoCategoria {
  status: string;
  message: Categoria[];
}

export interface Categoria {
  pk_categor: number;
  nombre_categor: string;
  createAt: Date;
  updateAt: Date;
}
