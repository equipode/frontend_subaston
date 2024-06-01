import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { tokenJwt } from "./auth/interfaces/jsonTokenJwt.interface";

export class MiInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const tokenOb = localStorage.getItem('tokenSys'); // obtiene el token JWT desde el almacenamiento local
    const token: tokenJwt = JSON.parse(tokenOb!);

    if (token) {
      // console.log(token);
      req = req.clone({
        setHeaders: {
          authorization: `${token.Token}` // agrega el token al encabezado "Authorization"
        }
      });
    }
    // console.log(req);
    return next.handle(req);
  }
}
