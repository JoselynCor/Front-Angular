import { Component, OnInit } from '@angular/core';
import { PeliculaModel } from 'src/app/models/pelicula.model';
import { PeliculaService } from 'src/app/service/pelicula.service';

@Component({
  selector: 'app-home-usuario',
  templateUrl: './home-usuario.component.html',
  styleUrls: ['./home-usuario.component.css']
})
export class HomeUsuarioComponent implements OnInit {

  pelicula = new PeliculaModel();

  peliculas: PeliculaModel[] = [];

  constructor(private peliculaService: PeliculaService ) { }
  

  ngOnInit(){
    this.peliculaService.getAllPeliculas()
    .subscribe(resp => {
      console.log(resp);
      this.peliculas=resp;
    });
  }

}
