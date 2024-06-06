import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { InfoRangoPrecio } from "../interfaces/rango_precio.interface";

@Injectable({
  providedIn: 'root'
})
export class RangoPrecioService {

  private baseUrl = environment.url_backend;

  private http = inject(HttpClient);

  listCategorias(): Observable<InfoRangoPrecio> {
    return this.http.get<InfoRangoPrecio>(`${this.baseUrl}/api/v1/rango_precio`);
  }

}
