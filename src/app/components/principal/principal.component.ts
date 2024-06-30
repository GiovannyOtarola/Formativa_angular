import { Component, AfterViewInit, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Renderer2, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { SessionService } from '../services/session.service';
import { Router } from '@angular/router';
import { JuegosService } from '../services/juegos.service';

export interface Juego {
  categoria: string;
  nombre: string;
  descripcion: string;
  precio: string; 
  descuento: string; 
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
  
  

  juegos: Juego[] = [];
  juegosFiltrados: Juego[] = [];

  
  isLoggedIn: boolean = false;
  loggedInUser: any = null;

  constructor(private route: ActivatedRoute, private sessionService: SessionService, private rout : Router, private juegosService : JuegosService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.sessionService.getSessionStatus();
    this.loggedInUser = this.sessionService.getLoggedInUser();

    // Obtén los datos del servicio
    this.juegosService.getJsonData().subscribe(
      (data: Juego[]) => {
        this.juegos = data;
        // Filtra los juegos iniciales si se proporciona una categoría en la ruta
        this.route.params.subscribe(params => {
          const categoria = params['categoria'];
          if (categoria) {
            this.filtrarPorCategoria(categoria);
          } else {
            // Si no se proporciona una categoría, mostrar todos los juegos
            this.juegosFiltrados = this.juegos;
          }
        });
      },
      error => {
        console.error('Error al obtener los datos del JSON', error);
      }
    );
  }


  filtrarPorCategoria(categoria: string) {
    this.juegosFiltrados = this.juegos.filter(juego => juego.categoria === categoria);
  }

  logout(): void {
    this.sessionService.logout();
    window.location.reload();
  }

  
  }

 

