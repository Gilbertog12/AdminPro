import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/service.index';
import { Usuarios } from 'src/app/Models/Usuario.Model';
import swal from 'sweetalert';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit {


  usuario :Usuarios;

  imagenSubir : File;
  imagenTemp : string

  constructor(public _usuarioServives:UsuarioService) { 

    this.usuario= this._usuarioServives.usuario
  }

  ngOnInit(): void {


  }

  guardar(usuario:Usuarios){

    this.usuario.nombre = usuario.nombre;
    this.usuario.email = usuario.email;
    if(!this.usuario.google){
      this.usuario.email = usuario.email;
    }
    this._usuarioServives.Actualizar(this.usuario).subscribe( resp=>
    {
      console.log(resp)
    }
    )

  }

  SeleccionImagen(archivo :File){


    if( !archivo ){
      this.imagenSubir = null;
       return
    }

    if( archivo.type.indexOf('image')<0){

      swal('Solo Imagenes','el archivo seleccionado no es una imagen', 'error');
      this.imagenSubir = null
      return
    }

    this.imagenSubir = archivo;

    let reader = new FileReader();
    let urlImageTemp = reader.readAsDataURL(archivo);

    reader.onloadend = () => this.imagenTemp = reader.result as string;
    
    this.imagenSubir = archivo;

    console.log( event)

  }

  CambiarImagen(){
     
    this._usuarioServives.CambiarImagen(this.imagenSubir,this.usuario._id); 
  }

}
