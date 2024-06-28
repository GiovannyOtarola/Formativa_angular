import { Component, AfterViewInit, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Renderer2, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { SessionService } from '../services/session.service';
import { Router } from '@angular/router';

interface Juego {
  categoria: string;
  nombre: string;
  descripcion: string;
  precio: String; 
  descuento: String; 
  imagen: string;
}

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {
  
  juegos: Juego[] = [
    //aventura
    {categoria:'aventura', nombre:'aventura 1', descripcion: 'Descripcion juego 1', precio:'$ 50', descuento:'no', imagen:'assets/images/aventura1.jpg'},
    {categoria:'aventura', nombre:'aventura 2', descripcion: 'Descripcion juego 2', precio:'$ 50', descuento:'no', imagen:'assets/images/aventura2.jpg'},
    {categoria:'aventura', nombre:'aventura 3', descripcion: 'Descripcion juego 3', precio:'$ 50', descuento:'no', imagen:'assets/images/aventura3.png'},
    {categoria:'aventura', nombre:'aventura 4', descripcion: 'Descripcion juego 4', precio:'$ 50', descuento:'no', imagen:'assets/images/aventura4.jpg'},
    //familia
    {categoria:'familia', nombre:'familia 1', descripcion: 'Descripcion juego 1', precio:'$ 50', descuento:'no', imagen:'assets/images/familia1.jpg'},
    {categoria:'familia',nombre:'familia 2', descripcion: 'Descripcion juego 2', precio:'$ 50', descuento:'no', imagen:'assets/images/familia2.jpg'},
    {categoria:'familia',nombre:'familia 3', descripcion: 'Descripcion juego 3', precio:'$ 50', descuento:'no', imagen:'assets/images/familia3.jpg'},
     
    //Recreativo
    {categoria:'recreativo', nombre:'Recreativo 1', descripcion: 'Descripcion juego 1', precio:'$ 50', descuento:'no', imagen:'assets/images/recreativo1.jpg'},
    {categoria:'recreativo',nombre:'Recreativo 2', descripcion: 'Descripcion juego 2', precio:'$ 50', descuento:'no', imagen:'assets/images/recreativo2.jpg'},
    {categoria:'recreativo',nombre:'Recreativo 3', descripcion: 'Descripcion juego 3', precio:'$ 50', descuento:'no', imagen:'assets/images/recreativo3.jpg'},
      
      //Rol
      {categoria:'rol', nombre:'Rol 1', descripcion: 'Descripcion juego 1', precio:'$ 50', descuento:'no', imagen:'assets/images/rol1.jpg'},
      {categoria:'rol',nombre:'Rol 2', descripcion: 'Descripcion juego 2', precio:'$ 50', descuento:'no', imagen:'assets/images/rol2.jpg'},
      {categoria:'rol',nombre:'Rol 3', descripcion: 'Descripcion juego 3', precio:'$ 50', descuento:'no', imagen:'assets/images/rol3.jpg'},
  
  ];

  
  juegosFiltrados: Juego[] = [];

  
  isLoggedIn: boolean = false;
  loggedInUser: any = null;

  constructor(private route: ActivatedRoute, private sessionService: SessionService, private rout : Router) { }

  ngOnInit(): void {

    this.isLoggedIn = this.sessionService.getSessionStatus();
    this.loggedInUser = this.sessionService.getLoggedInUser();

    //  cargar los juegos iniciales la lógica de filtrado si se proporciona una categoría en la ruta
    this.route.params.subscribe(params => {
      const categoria = params['categoria'];
      if (categoria) {
        this.filtrarPorCategoria(categoria);
      } else {
        // Si no se proporciona una categoría, mostrar todos los juegos
        this.juegosFiltrados = this.juegos;
      }
    });
    
    
    }

  filtrarPorCategoria(categoria: string) {
    this.juegosFiltrados = this.juegos.filter(juego => juego.categoria === categoria);
  }

  logout(): void {
    this.sessionService.logout();
    window.location.reload();
  }

  
  }

 

