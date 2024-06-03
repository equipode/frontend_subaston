import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io, Socket } from 'socket.io-client';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket: Socket;
  private baseUrl = environment.url_backend;

  constructor() {
    this.socket = io(this.baseUrl); // Cambia la URL según tu configuración
  }

  // Emitir un evento
  emit(event: string, data: any) {
    this.socket.emit(event, data);
  }

  // Escuchar un evento
  on(event: string): Observable<any> {
    return new Observable(observer => {
      this.socket.on(event, (data) => {
        observer.next(data);
      });
    });
  }
}
