import { Component, OnInit } from '@angular/core';
import { SerieModel } from 'src/app/models/serie.model';
import { SerieService } from 'src/app/service/serie.service';

@Component({
  selector: 'app-home-serie',
  templateUrl: './home-serie.component.html',
  styles: [
  ]
})
export class HomeSerieComponent implements OnInit {

  serie = new SerieModel();

  series: SerieModel[] = [];

  constructor(private serieService: SerieService) { }

  ngOnInit() {
    this.serieService.getAllSeries()
        .subscribe(resp => {
          console.log(resp);
          this.series=resp;
        });
  }

}
