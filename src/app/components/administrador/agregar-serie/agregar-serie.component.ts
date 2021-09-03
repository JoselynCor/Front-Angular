import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar-serie',
  templateUrl: './agregar-serie.component.html',
  styleUrls: ['./agregar-serie.component.css']
})
export class AgregarSerieComponent implements OnInit {

  serie = {
    titulo: '13 reasons why',
    categoria: 'Drama',
    capitulos: '13',
    temporadas: '1',
    fecha: '31-mar-2017',
    descripcion: 'El adolescente Clay se halla en medio de una serie de misterios.'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
