import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeUsuarioComponent } from './components/usuario/home-usuario/home-usuario.component';
import { HomeAdministradorComponent } from './components/administrador/home-administrador/home-administrador.component';
import { AgregarCapituloComponent } from './components/administrador/agregar-capitulo/agregar-capitulo.component';
import { AgregarPeliculaComponent } from './components/administrador/agregar-pelicula/agregar-pelicula.component';
import { AgregarSerieComponent } from './components/administrador/agregar-serie/agregar-serie.component';
import { CatalogoCapitulosComponent } from './components/administrador/catalogo-capitulos/catalogo-capitulos.component';
import { CatalogoPeliculasComponent } from './components/administrador/catalogo-peliculas/catalogo-peliculas.component';
import { CatalogoSeriesComponent } from './components/administrador/catalogo-series/catalogo-series.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/shared/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { NavbarUsuarioComponent } from './components/usuario/navbar-usuario/navbar-usuario.component';
import { HomeSerieComponent } from './components/usuario/home-serie/home-serie.component';
import { HomeRentaComponent } from './components/renta/home-renta/home-renta.component';
import { CapituloComponent } from './components/usuario/capitulo/capituloS1.component';

const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'home-usuario', component:HomeUsuarioComponent },
    { path: 'home-administrador', component: HomeAdministradorComponent },
    { path: 'home-serie' , component: HomeSerieComponent},
    { path: 'capitulo', component: CapituloComponent},
    { path: 'home-renta' , component: HomeRentaComponent},
    { path: 'agregar-capitulo', component: AgregarCapituloComponent },
    { path: 'agregar-pelicula', component: AgregarPeliculaComponent },
    { path: 'agregar-serie', component: AgregarSerieComponent },
    { path: 'catalogo-capitulos', component: CatalogoCapitulosComponent },
    { path: 'catalogo-peliculas', component: CatalogoPeliculasComponent },
    { path: 'catalogo-series', component: CatalogoSeriesComponent },
    { path: 'login', component: LoginComponent },
    { path: 'registro', component: RegistroComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home-administrador' },
    { path: 'navbar-usuario', component: NavbarUsuarioComponent},

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
]


export const APP_ROUTING =  RouterModule.forRoot(ROUTES);
