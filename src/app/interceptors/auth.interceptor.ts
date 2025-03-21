import { HttpHandlerFn, HttpInterceptorFn, HttpRequest } from "@angular/common/http";
import { inject } from "@angular/core";
import { AuthService } from "../services/auth.services";



export const AuthInterceptor: HttpInterceptorFn = (
    req: HttpRequest<any>,
    next: HttpHandlerFn
) => {

    const authServcie = inject(AuthService)
    const token = authServcie.getToken();
    if (token) 
        {
          req = req.clone({
            setHeaders: { Authorization: `Bearer ${token}` }
          });
        }
    
        return next(req);

    
  }
