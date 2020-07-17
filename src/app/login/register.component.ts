import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import swal from 'sweetalert';
import { UsuarioService } from '../services/service.index';
import { Usuarios } from '../Models/Usuario.Model';
import { Router } from '@angular/router';



declare function init_plugins();


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})
export class RegisterComponent implements OnInit {

  forma : FormGroup;
  constructor( public _Usuarioservice : UsuarioService ,
    public router : Router) { }


  SonIguales( campo1: string , campo2: string){

    return (group : FormGroup) =>{
       let pass1 = group.controls[campo1].value
       let pass2 = group.controls[campo2].value

       if( pass1 === pass2){
         return null;
       }

       return{
        SonIguales: true
       };
    };
  }
  ngOnInit(): void {
    init_plugins();

    this.forma = new FormGroup({
      nombre : new FormControl(null, Validators.required),
      correo : new FormControl(null , [Validators.required , Validators.email]),
      password : new FormControl(null , Validators.required),
      password2 : new FormControl(null , Validators.required),
      condiciones : new FormControl( false)

    }, { validators: this.SonIguales('password', 'password2')});

    this.forma.setValue({

      nombre :'Prueba',
      correo: 'prueba@hospital.com', 
      password :'123456',
      password2 : '12345',
      condiciones : true
    })

  }

  RegistarUsuario(){

    if( !this.forma.valid){
       return;
    }

    if( !this.forma.value.condiciones){

      swal("Importante!", "Debe Aceptar las Condiciones!", "warning");
      // console.log( 'Debe Aceptar las Condiciones');
      return;

    }
    


    let usuario = new Usuarios(
      this.forma.value.nombre,
       this.forma.value.correo,
        this.forma.value.password);

        this._Usuarioservice.CrearUsuario(usuario)
        .subscribe(resp => {
          console.log(resp);
          this.router.navigate(['/login']);
        });
  }

}
