import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar-capitulo',
  templateUrl: './agregar-capitulo.component.html',
  styleUrls: ['./agregar-capitulo.component.css']
})
export class AgregarCapituloComponent implements OnInit {

  capitulo = {
    titulo: 'Casete 1 lado A',
    temporada: '1',
    duracion: '52 min',
    descripcion: 'Mientras la escuela a la que asistia hanna baker esta de luto por su muerte, Clay recibe unas cintas que ella grabó antes de suicidarse'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
