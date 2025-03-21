import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";
import { CredencialesUsuarioDTO, RespuestaAutenticacionDTO } from "../DTOs/auth";
import { environment } from "../../environments/environment.development";

@Injectable({
	providedIn: 'root'
})
export class AuthService {
private readonly http = inject(HttpClient);
private readonly urlBase = environment.apiURL;
private readonly keyToken = "token";
private readonly keyExpiration = "token-expiration"


public login(credenciales: CredencialesUsuarioDTO): Observable<RespuestaAutenticacionDTO> {
    return this.http.post<RespuestaAutenticacionDTO>(this.urlBase + "/Auth/login", credenciales)
    .pipe(
        tap(respuestaAutenticacion => this.saveToken(respuestaAutenticacion))
    )
}

saveToken(respuesta: RespuestaAutenticacionDTO)
{
    localStorage.setItem(this.keyToken, respuesta.token)
    localStorage.setItem(this.keyExpiration, respuesta.expiracion.toString())
}
getToken(){
    return localStorage.getItem(this.keyToken);
}

}