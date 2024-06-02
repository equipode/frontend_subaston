import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countdown',
  pure: false
})
export class CountdownPipe implements PipeTransform {

  transform(isoString: string, time: string): string {

    const date = new Date(isoString);
    const dateOnly = date.toISOString().split('T')[0];

    console.log(dateOnly);

    const targetDateTime = new Date(`${dateOnly}T${time}`);
    const now = new Date().getTime();
    const target = targetDateTime.getTime();

    const diff = target - now;

    if (diff <= 0) {
      return '0';
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    let mensaje;

    if (days === 0) {
      mensaje = `${this.pad(hours)}:${this.pad(minutes)}:${this.pad(seconds)}`;
    } else {
      if (days === 1) {
        mensaje = `${days} Dia ${this.pad(hours)}:${this.pad(minutes)}:${this.pad(seconds)}`;
      } else {
        mensaje = `${this.pad(days)} Dias ${this.pad(hours)}:${this.pad(minutes)}:${this.pad(seconds)}`;
      }
    }

    return mensaje;
  }

  pad(value: number): string {
    return value < 10 ? `0${value}` : value.toString();
  }
}
