import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/service.index';
import { Usuarios } from 'src/app/Models/Usuario.Model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public _usuarioServices:UsuarioService) { }

  usuario : Usuarios;

  ngOnInit(): void {

    this.usuario = this._usuarioServices.usuario;
  }

  

}
