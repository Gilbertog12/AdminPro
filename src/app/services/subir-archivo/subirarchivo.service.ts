import { Injectable } from '@angular/core';

import { UrlServicios } from 'src/app/config/config';

@Injectable({
  providedIn: 'root'
})
export class SubirArchivoService {

  constructor() { }

  subirArchivo( archivo: File , tipo:string ,id: string){


      return new Promise ( (resolve , reject) => {
        
        
        let formdata = new FormData();
        let xhr = new XMLHttpRequest()
  
        formdata.append('imagen',archivo,archivo.name)
  
        xhr.onreadystatechange = function() {
           
          if(xhr.readyState === 4 ){
            if(xhr.status ===200){
              console.log('imagen arriba')
              resolve( JSON.parse(xhr.response));

  
            }else{
              console.log('Fallo la carga ');
              reject ( xhr.response)
            }
          }
        };

          let url = UrlServicios + '/upload/'+ tipo+'/'+id;
          
          xhr.open('PUT',url, true);
          xhr.send(formdata)

      });
  }
}