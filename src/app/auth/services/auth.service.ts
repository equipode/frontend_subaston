import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, catchError, throwError } from "rxjs";
import { environment } from "../../../environments/environment";
import { Auth } from "../interfaces/auth.interface";
import { tokenJwt } from "../interfaces/jsonTokenJwt.interface";

interface User {
  role: number | any;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user!: User;
  public isAuthenticated: boolean = false;
  private baseUrl = environment.url_backend;

  constructor(private http: HttpClient, private router: Router) { }

  login(credents: Auth): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/api/v1/auth/login`, credents)
      .pipe(
        catchError(this.handleError)
      );
  }

  set setCambiarRol(tipo: User) {
    this.user = tipo;
  }

  get getToken() {
    const tokenOb = localStorage.getItem('tokenSys'); // obtiene el token JWT desde el almacenamiento local
    const token: tokenJwt | any = JSON.parse(tokenOb!);
    if (token) {
      return token;
    } else {
      this.router.navigate(['./login']);
    }
  }

  logout() {
    localStorage.removeItem('tokenSys');
    this.isAuthenticated = false;
    this.router.navigate(['./login']);

  }


  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('Ha ocurrido un error:', error.error.message);
    } else {
      console.error(`Código de error: ${error.status}, ` + `mensaje: ${error.message}`);
    }
    return throwError('Verifique sus credenciales.');
  }
}
