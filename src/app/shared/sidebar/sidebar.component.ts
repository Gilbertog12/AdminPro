import { Component, OnInit } from '@angular/core';
import { SidebarService, UsuarioService } from '../../services/service.index';
import { Usuarios } from 'src/app/Models/Usuario.Model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  usuario:Usuarios

  constructor(public _sidebar: SidebarService, public _usuarioServices:UsuarioService) { }

  ngOnInit(): void {

    this.usuario = this._usuarioServices.usuario;
  }

}
