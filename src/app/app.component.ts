import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, MatToolbarModule, MatMenuModule, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MiniSistema';
  private readonly keyToken = "token";
  private readonly keyExpiration = "token-expiration"
  isLoggedIn = false;
  constructor(private readonly router: Router, private readonly authGuard: AuthGuard)
  {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isLoggedIn = this.authGuard.canActivate();
      }
    });
  }
  
  logout()
{
    this.authGuard.logout();
}
}
