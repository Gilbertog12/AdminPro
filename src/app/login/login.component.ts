import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../services/service.index';
import { Usuarios } from '../Models/Usuario.Model';

declare function init_plugins();
declare const gapi: any;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router: Router , public _usuarioServices:UsuarioService) { 

  }
  email : string
  recuerdame : boolean = false;
  auth2: any ;



  ngOnInit(): void {

    init_plugins();
    this.googleinit()

    this.email = localStorage.getItem('email') || '';

    if(this.email.length >1){

      this.recuerdame = true;
    }
  }

  googleinit(){
    gapi.load('auth2', () =>{
        this.auth2 = gapi.auth2.init({

          client_id : '32331213213-t52oopgfq9qddgq3t5jqgm9idqrg2a66.apps.googleusercontent.com',
          cookiepolicy: 'sigle_host_origin',
          scope: 'profile email'
        });

        this.attachSingin(document.getElementById('btngoogle'));
    });
  }

  attachSingin( element ){

    this.auth2.attachClickHandler( element, {},
        (googleUser) => {
          let token  = googleUser.getAuthResponse().id_token;

          this._usuarioServices.LoginGoogle(token).subscribe( () =>{

            window.location.href = '#/dashboard'
          })
          

          

        });
  }

  

  ingresar( forma : NgForm){

    // this.router.navigate(['/dashboard']);

    if(!forma.valid){
      return
    }
    
    let usuario = new Usuarios(null, forma.value.email,forma.value.password)

    this._usuarioServices.Login(usuario, forma.value.recordar).subscribe(resp => this.router.navigate(['/dashboard']))
    
   }

  
}
