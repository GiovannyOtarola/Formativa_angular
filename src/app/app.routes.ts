import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    //esto indica cual es la primera pagina que se debe inicar junto con la app
    {path: '**', redirectTo: 'login'},
    {path: 'login', component: LoginComponent},
];