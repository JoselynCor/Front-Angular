import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { SerieModel } from '../models/serie.model';

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  private url = "http://localhost:5000/series"

  constructor(private http: HttpClient) { }
  
  getAllSeries( ) {
    
    return this.http.get(`${this.url}`)
                    .pipe(
                      map(this.crearArreglo)
                    );
  }

  private crearArreglo( seriesObj: object ){

    const series: SerieModel[] = [];
    
    Object.keys(seriesObj).forEach(key =>{

      const serie: SerieModel = seriesObj[key];
      
      serie.Id_Serie = key;

      series.push(serie);
    });

    if(seriesObj === null) { return []; }

    return series;
  }
  
}


