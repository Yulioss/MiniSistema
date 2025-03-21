import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
private readonly keyToken = "token";
private readonly keyExpiration = "token-expiration"
  constructor(private router: Router) {}


  canActivate(): boolean
{
    const token = localStorage.getItem(this.keyToken)
    if(!token)
    {
        this.router.navigate(['/login']);
        return false;
    }

    const expiration = localStorage.getItem(this.keyExpiration)
    
    if(!expiration)
    {
        this.router.navigate(['/login']);
        return false
    }
    
    const expirationDate = new Date(expiration);
    if(expirationDate <= new Date())
    {
        this.logout();
        this.router.navigate(['/login']);
        return false
    }   
    return true;
}
logout()
{
    localStorage.removeItem(this.keyToken);
    localStorage.removeItem(this.keyExpiration);
}
}