import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ViewInventaryComponent } from './components/view-inventary/view-inventary.component';
import { AuthGuard } from './guards/auth.guard';


export const routes: Routes = [
    {path:'login', component: LoginComponent},
    {path:'inventory', component:ViewInventaryComponent, canActivate: [AuthGuard]},
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', redirectTo: '/login' }
];
