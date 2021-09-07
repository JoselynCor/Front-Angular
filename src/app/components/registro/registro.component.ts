import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { SocioModel } from 'src/app/models/socio.model';
import { SocioService } from 'src/app/service/socio.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  socio: SocioModel = new SocioModel();

  constructor(private socioService: SocioService) { }

  ngOnInit() {
  }

    saveSocio(form: NgForm){

      /*if( form.invalid ){
        console.log('Datos no válidos')
        return;
      }*/
      
      this.socioService.createSocio(this.socio)
          .subscribe(resp => {
            console.log(resp);
          });

    }
   
}
