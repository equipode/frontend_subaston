import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { ResponseUsersLineaSubasta } from "../interfaces/subasta.interface";

@Injectable({
  providedIn: 'root'
})
export class SubastaService {
  private baseUrl = environment.url_backend;

  private http = inject(HttpClient);

  totalUsuariosEnLinea(): Observable<ResponseUsersLineaSubasta> {
    return this.http.get<ResponseUsersLineaSubasta>(`${this.baseUrl}/api/v1/subasta/usuariosLinea`);
  }
}
