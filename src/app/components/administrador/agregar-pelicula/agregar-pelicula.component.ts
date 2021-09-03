import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar-pelicula',
  templateUrl: './agregar-pelicula.component.html',
  styleUrls: ['./agregar-pelicula.component.css']
})
export class AgregarPeliculaComponent implements OnInit {

  pelicula = {
    titulo: 'Fractura',
    categoria: 'Suspenso',
    duracion: '1 hr 40 min',
    fecha: '22-sep-2019',
    descripcion: 'Despues de que su esposa y su hija desaparecen de la sala de emergencias, un hombre se convence de que el hospital esta ocultando algo.'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
