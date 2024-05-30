export interface CreateUser {
  usuario: string;
  nit: string;
  contrasenia: string;
  foto_perfil: string;
  fk_rol: number;

}

export interface ResponseCreateUser {
  status: string;
  message: string;
  data: CreateUser;
}
