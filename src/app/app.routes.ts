import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { IndexComponent } from './components/index/index.component';
import { RecreativoComponent } from './components/recreativo/recreativo.component';
import { FamiliaComponent } from './components/familia/familia.component';
import { AventuraComponent } from './components/aventura/aventura.component';
import { RolComponent } from './components/rol/rol.component';

export const routes: Routes = [
    //esto indica cual es la primera pagina que se debe inicar junto con la app
    {path: '**', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'registro', component: RegistroComponent},
    {path: 'index', component: IndexComponent},
    {path: 'recreativo',component: RecreativoComponent},
    {path: 'familia', component: FamiliaComponent},
    {path: 'aventura',component: AventuraComponent},
    {path: 'rol', component: RolComponent}
];