
export const convertirFecha = (fecha: string): any => {
  const partes = fecha.split('/'); // Dividir la fecha en partes: día, mes y año
  if (partes.length === 3) {
    const dia = partes[0].padStart(2, '0');
    const mes = partes[1].padStart(2, '0'); // Asegura que el mes tenga dos dígitos
    const anio = partes[2];

    return `${anio}-${mes}-${dia}`;
  }
}
