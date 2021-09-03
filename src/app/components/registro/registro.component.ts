import { Component, OnInit } from '@angular/core';
import {UsuarioModel} from '../../models/usuario.model';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: UsuarioModel;

  constructor() { }

  ngOnInit() {

    this.usuario = new UsuarioModel();
    this.usuario.email = 'jimenezlinares.suemy@gmail.com';
    this.usuario.password = 'ximena';
    this.usuario.nombre = 'Suemy';
    this.usuario.apellidos = 'Jimenez';
    this.usuario.telefono = '5544646889';

   }

   onSubmit(form: NgForm){

    if(form.invalid){return;}
     console.log('Formulario enviado');
     console.log(this.usuario);
     console.log(form);
   }
}
