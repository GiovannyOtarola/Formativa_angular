import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
  })

  export class JsonService{
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer d2570adc-6f7b-47f8-944e-564df43bbfae'
        })
    }

    private jsonUrl = 'https://firebasestorage.googleapis.com/v0/b/formativa-c5064.appspot.com/o/usuarios.json?alt=media&token=d2570adc-6f7b-47f8-944e-564df43bbfae';

    

    constructor(private http: HttpClient){}

    getJsonData(): Observable<any>{
        return this.http.get(this.jsonUrl);
    }
    
    MetodoUsuario(listaUsuarios:any) {
      console.log(listaUsuarios);
      this.http.post(this.jsonUrl,listaUsuarios,this.httpOptions).subscribe(
        response => {
          console.log('Archivo JSON sobrescrito con exito', response);
        },
        error => {
          console.error('Error al sobrescribir el archivo JSON', error);
        })
    }
  }
