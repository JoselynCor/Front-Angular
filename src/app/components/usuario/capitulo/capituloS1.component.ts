import { Component, OnInit } from '@angular/core';
import { CapituloModel } from 'src/app/models/capitulo.model';
import { CapituloService } from 'src/app/service/capituloS1.service';

@Component({
  selector: 'app-capitulo',
  templateUrl: './capituloS1.component.html',
  styles: [
  ]
})
export class CapituloComponent implements OnInit {

  capitulo = new CapituloModel();

  capitulos: CapituloModel[] = [];

  Id_serie: string;

  constructor(private capituloService: CapituloService) { }

  ngOnInit() {
    /*this.capituloService.getByIdSerie(Id_serie)
                        .subscribe(resp =>{
                          console.log(resp);
                          this.capitulos=resp;
                        });*/
  }

}


