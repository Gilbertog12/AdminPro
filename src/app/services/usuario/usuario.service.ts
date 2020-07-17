import { Injectable } from '@angular/core';
import { Usuarios } from 'src/app/Models/Usuario.Model';
import { HttpClient } from '@angular/common/http'
import { UrlServicios } from 'src/app/config/config';

import { map } from 'rxjs/internal/operators/map';
import swal from 'sweetalert';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuario : Usuarios;
  token:string;


  constructor(
    public http: HttpClient,
    public router : Router
  ) { 

    this.CargarStorage()
  }

  GuardarLocalStorage( id: string , token:string, usuario:Usuarios){

      
    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    localStorage.setItem ('usuario' , JSON.stringify(usuario));

    this.usuario = usuario;
    this.token = token;

  }

  logout(){

    this.usuario = null;
    this.token = ''

    localStorage.removeItem('token')
    localStorage.removeItem('usuario')

    this.router.navigate(['/login'])

  }

  CargarStorage(){

    if(localStorage.getItem('token')){
      this.token = localStorage.getItem('token'),
      this.usuario = JSON.parse(localStorage.getItem('usuario'))
    }else{

      this.token = '';
      this.usuario = null
    }
  }
  EstaLogueado(){
    return ( this.token.length > 5) ? true : false;
  }

  

  LoginGoogle( token : string){

    let url_Servicios = UrlServicios+'/login/google';

    return this.http.post(url_Servicios , {token }).pipe(map(( resp : any )=>{

       this.GuardarLocalStorage(resp.id,resp.token,resp.usuario);
       return true;
    }))

  }  
  Login( usuario:Usuarios , recordar:boolean = false){

    if( recordar ){

      localStorage.setItem('email', usuario.email)
      
    }else{
      localStorage.removeItem('email');
    }
    
    let url_Servicios = UrlServicios+'/login';
    return this.http.post(url_Servicios , usuario).pipe(map( (resp:any) =>{
        
      this.GuardarLocalStorage(resp.id,resp.token,resp.usuario);

        return true;
    }))
    
  }

  CrearUsuario( usuario :Usuarios){

    let url_Servicios = UrlServicios+'/usuario';

     return this.http.post( url_Servicios , usuario).pipe(
       map((resp: any) => {
          swal('Usuario Creado', usuario.email , 'success')
         return resp.usuario;
       }))

      

      }



  }

