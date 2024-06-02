import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usersLinea'
})
export class UsersLineaPipe implements PipeTransform {

  transform(cantidaUsuarios: number): string {
    let mensaje = '';
    if (cantidaUsuarios === 0) {
      mensaje = 'No hay usuarios en linea';
    } else if (cantidaUsuarios > 1) {
      mensaje = `${cantidaUsuarios} Usuarios en linea`;
    } else {
      mensaje = `${cantidaUsuarios} Usuario en linea`;
    }

    return mensaje;
  }

}
