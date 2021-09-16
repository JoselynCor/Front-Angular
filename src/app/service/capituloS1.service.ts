import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { CapituloModel } from '../models/capitulo.model';

@Injectable({
  providedIn: 'root'
})
export class CapituloService {

  private url = "http://127.0.0.1:5000/capituloSerie"  
  
  constructor(private http: HttpClient) { }

  getAllCapitulos(){

    return this.http.get(`${this.url}`)
                    .pipe(
                      map(this.crearArreglo)
                    );
  }

  getByIdSerie(Id_serie){

    return this.http.get(`${this.url}/${Id_serie}`)
                    .pipe(
                      map(this.crearArreglo)
                      
                    );
  }

  private crearArreglo( capitulosObj: object){
    const capitulos: CapituloModel[] = [];

    Object.keys(capitulosObj).forEach(key =>{

      const capitulo: CapituloModel = capitulosObj[key];

      capitulo.Id_Capitulo = key;

      capitulos.push(capitulo);
    });

    if(capitulosObj === null) {return[];}

    return capitulos;
  }
}

