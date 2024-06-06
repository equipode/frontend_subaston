import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { CreateProducto, InfoProductoPorUsuario, ResponseCreateProduct, ResponseProduct, ResponseProductoEliminado } from "../interfaces/producto.interface";

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private baseUrl = environment.url_backend;

  private http = inject(HttpClient);

  listProductos(): Observable<ResponseProduct> {
    return this.http.get<ResponseProduct>(`${this.baseUrl}/api/v1/producto`);
  }

  listProductosPorUsuario(idUser: number): Observable<InfoProductoPorUsuario> {
    return this.http.get<InfoProductoPorUsuario>(`${this.baseUrl}/api/v1/producto/usuario?idUser=${idUser}`);
  }

  saveProducto(producto: CreateProducto): Observable<ResponseCreateProduct> {
    return this.http.post<ResponseCreateProduct>(`${this.baseUrl}/api/v1/producto/crear`, producto);
  }

  eliminarProducto(idProducto: number): Observable<ResponseProductoEliminado> {
    return this.http.delete<ResponseProductoEliminado>(`${this.baseUrl}/api/v1/producto?idProducto=${idProducto}`);
  }

}
