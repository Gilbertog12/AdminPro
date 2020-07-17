import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { UsuarioService } from '../usuario/usuario.service';


@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {

  constructor(public _usuariosService: UsuarioService,
    public router :Router){

  }

  canActivate()
    {
      if( this._usuariosService.EstaLogueado()){
        return true

      }else{
      console.log('Bloqueado por el Guard')
        this.router.navigate(['/login'])
        return false

      }
    return true;
  }
  
}
