import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  private url = "http://localhost:27017/series"
  constructor(private http: HttpClient) { }
  getAllSeries( ) {
    //return this.http.get
    //return this.http.get<serieModel>(`${this.url}`)
    //.pipe(map(resp=>{return resp}))
    
   
    
  }
  
}


