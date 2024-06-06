import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { CreateProducto, ResponseCreateProduct, ResponseProduct } from "../interfaces/producto.interface";

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private baseUrl = environment.url_backend;

  private http = inject(HttpClient);

  listProductos(): Observable<ResponseProduct> {
    return this.http.get<ResponseProduct>(`${this.baseUrl}/api/v1/producto`);
  }

  saveProducto(producto: CreateProducto): Observable<ResponseCreateProduct> {
    return this.http.post<ResponseCreateProduct>(`${this.baseUrl}/api/v1/producto/crear`, producto);
  }

}
