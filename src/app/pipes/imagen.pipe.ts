import { Pipe, PipeTransform } from "@angular/core";
import { UrlServicios } from "../config/config";

@Pipe({
  name: "imagen",
})
export class ImagenPipe implements PipeTransform {
  transform(img: string, tipo: string = "usuario"): any {
    let url = UrlServicios + '/img';

    if (!img) {
      return url + "/usuarios/xxx";
    }

    if (img.indexOf("https") >= 0) {
      return img;
    }

    switch (tipo) {
      case "usuario":
        url += "/usuarios/" + img;
        break;
      case "medico":
        url += "/medicos/" + img;
        break;
      case "hospital":
        url += "/hospitales/" + img;
        break;
      default:
        console.log('Tipo Imagen no existe, Usuarios,Medicos,Hospitales')
        url +='/usuarios/xxx'
        break;
    }
    return url;
  }
}
