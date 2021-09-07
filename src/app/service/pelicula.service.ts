import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PeliculaModel } from '../models/pelicula.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  private url = "http://localhost:5000/peliculas"

  constructor(private http: HttpClient) { }

  getAllPeliculas( ) {
    //return this.http.get
    return this.http.get(`${this.url}`)
                    .pipe(
                      map(this.crearArreglo)
                    );
  }

  private crearArreglo( peliculasObj: object ){

    const peliculas: PeliculaModel[] = [];
    
    Object.keys(peliculasObj).forEach(key =>{

      const pelicula: PeliculaModel = peliculasObj[key];
      
      pelicula.Id_Pelicula = key;

      peliculas.push(pelicula);
    });

    if(peliculasObj === null) { return []; }

    return peliculas;
    
  }
}
