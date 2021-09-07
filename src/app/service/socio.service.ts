import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SocioModel } from '../models/socio.model';

@Injectable({
  providedIn: 'root'
})
export class SocioService {

  private url = 'http://127.0.0.1:5000/socios';

  constructor(private http: HttpClient) { }

  createSocio(socio: SocioModel){

    return this.http.post(`${this.url}`, socio);
  }
}
