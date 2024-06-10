import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { IndexComponent } from './components/index/index.component';
import { PrincipalComponent } from './components/principal/principal.component';


export const routes: Routes = [
    //esto indica cual es la primera pagina que se debe inicar junto con la app
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'registro', component: RegistroComponent},
    {path: 'index', component: IndexComponent},
    {path: 'principal', component: PrincipalComponent}
    
];