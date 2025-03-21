export interface CredencialesUsuarioDTO
{
    username: string,
    password: string
}

export interface RespuestaAutenticacionDTO
{
    token:string,
    expiracion:Date
}