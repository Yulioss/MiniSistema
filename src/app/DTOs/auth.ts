export interface CredencialesUsuarioDTO
{
    Username: string,
    Password: string
}

export interface RespuestaAutenticacionDTO
{
    Token:string,
    Expiracion:Date
}