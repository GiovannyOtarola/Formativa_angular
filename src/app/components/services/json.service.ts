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
            'Authorization': 'Bearer 41caade1-00e4-4743-8b7d-ac4afe436162'
        })
    }

    private jsonUrl = 'https://firebasestorage.googleapis.com/v0/b/formativaangular.appspot.com/o/usuarios.json?alt=media&token=41caade1-00e4-4743-8b7d-ac4afe436162';

    

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
