import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { InfoCategoria } from "../interfaces/categoria.interface";

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private baseUrl = environment.url_backend;

  private http = inject(HttpClient);

  listCategorias(): Observable<InfoCategoria> {
    return this.http.get<InfoCategoria>(`${this.baseUrl}/api/v1/categoria`);
  }

}
