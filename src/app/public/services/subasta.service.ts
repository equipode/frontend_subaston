import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SubastaService {
  private baseUrl = environment.url_backend;

  private http = inject(HttpClient);

  totalUsuariosEnLinea(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/api/v1/subasta/usuariosLinea`);
  }
}
