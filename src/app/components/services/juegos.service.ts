import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable, map } from "rxjs";


@Injectable({
    providedIn: 'root'
  })

  export class JuegosService{
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 9c302f3c-a1d8-45c6-8057-c216a8a9725c'
        })
    }

    private jsonUrl = 'https://firebasestorage.googleapis.com/v0/b/formativa-c5064.appspot.com/o/juegos.json?alt=media&token=9c302f3c-a1d8-45c6-8057-c216a8a9725c';

    

    constructor(private http: HttpClient){}

    getJsonData(): Observable<any>{
        return this.http.get(this.jsonUrl);
    }
    
    MetodoJuego(listaJuegos:any) {
      console.log(listaJuegos);
      this.http.post(this.jsonUrl,listaJuegos,this.httpOptions).subscribe(
        response => {
          console.log('Archivo JSON sobrescrito con exito', response);
        },
        error => {
          console.error('Error al sobrescribir el archivo JSON', error);
        })
    }

  
  }
