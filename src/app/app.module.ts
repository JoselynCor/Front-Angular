import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


//RUTAS
import {APP_ROUTING} from './app.routes';

//SERVICIOS
import { HttpClientModule } from '@angular/common/http';

//COMPONENTES
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeAdministradorComponent } from './components/administrador/home-administrador/home-administrador.component';
import { HomeUsuarioComponent } from './components/usuario/home-usuario/home-usuario.component';
import { HomeComponent } from './components/home/home.component';
import { AgregarPeliculaComponent } from './components/administrador/agregar-pelicula/agregar-pelicula.component';
import { AgregarCapituloComponent } from './components/administrador/agregar-capitulo/agregar-capitulo.component';
import { AgregarSerieComponent } from './components/administrador/agregar-serie/agregar-serie.component';
import { CatalogoPeliculasComponent } from './components/administrador/catalogo-peliculas/catalogo-peliculas.component';
import { CatalogoSeriesComponent } from './components/administrador/catalogo-series/catalogo-series.component';
import { CatalogoCapitulosComponent } from './components/administrador/catalogo-capitulos/catalogo-capitulos.component';
import { LoginComponent } from './components/shared/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { NavbarUsuarioComponent } from './components/usuario/navbar-usuario/navbar-usuario.component';
import { HomeSerieComponent } from './components/usuario/home-serie/home-serie.component';
import { TemplateComponent } from './pages/template/template.component';
import { ReactiveComponent } from './pages/reactive/reactive.component';
import { HomeRentaComponent } from './components/renta/home-renta/home-renta.component';
import { CapituloComponent } from './components/usuario/capitulo/capituloS1.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeAdministradorComponent,
    HomeUsuarioComponent,
    HomeComponent,
    AgregarPeliculaComponent,
    AgregarCapituloComponent,
    AgregarSerieComponent,
    CatalogoPeliculasComponent,
    CatalogoSeriesComponent,
    CatalogoCapitulosComponent,
    LoginComponent,
    RegistroComponent,
    NavbarUsuarioComponent,
    HomeSerieComponent,
    TemplateComponent,
    ReactiveComponent,
    HomeRentaComponent,
    CapituloComponent
  ],


  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
