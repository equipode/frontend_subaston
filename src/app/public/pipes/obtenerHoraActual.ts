export const getCurrentTimeInFormat = (): string => {
  const ahora = new Date();

  const horas = ahora.getHours().toString().padStart(2, '0');
  const minutos = ahora.getMinutes().toString().padStart(2, '0');
  const segundos = ahora.getSeconds().toString().padStart(2, '0');

  return `${horas}:${minutos}:${segundos}`;
}
