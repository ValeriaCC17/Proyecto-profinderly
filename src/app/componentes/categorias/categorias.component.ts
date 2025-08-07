import { Component, OnInit } from '@angular/core';
import { Tarjeta } from '../../interface/tarjetas';
import { TarjetasService } from '../../servicios/tarjetas.service';
import { CommonModule } from '@angular/common';
import { InformacionListadoComponent } from '../informacion-listado/informacion-listado.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [CommonModule, InformacionListadoComponent],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css',
})
export class CategoriasComponent implements OnInit {
  humanos: Tarjeta[] = [];
  aliens: Tarjeta[] = [];
  robots: Tarjeta[] = [];

  personajeSeleccionado: Tarjeta | null = null;

  constructor(
    private tarjetaServicio: TarjetasService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.tarjetaServicio.obtenerIconos().subscribe((data) => {
      const urls = data.results
        .slice(0, 5)
        .flatMap((loc: any) => loc.residents)
        .slice(0, 50);

      this.tarjetaServicio
        .obtenerPersonajesPorUrls(urls)
        .subscribe((respuestas: Tarjeta[]) => {
          this.humanos = respuestas.filter((p) => p.species === 'Human');
          this.aliens = respuestas.filter((p) => p.species === 'Alien');
          this.robots = respuestas.filter((p) => p.species === 'Robot');
        });
    });
  }

  toggleInfo(tipo: 'humano' | 'alien' | 'robot', index: number): void {
    if (tipo === 'humano') {
      this.personajeSeleccionado = this.humanos[index];
    } else if (tipo === 'alien') {
      this.personajeSeleccionado = this.aliens[index];
    } else if (tipo === 'robot') {
      this.personajeSeleccionado = this.robots[index];
    }
  }
   verDetalle(personaje: Tarjeta){
    this.router.navigate(['informacion', personaje.id])
   }

   scrollLeft(id: string): void {
  const container = document.getElementById(id);
  if (container) {
    container.scrollLeft -= 300;
  }
}

scrollRight(id: string): void {
  const container = document.getElementById(id);
  if (container) {
    container.scrollLeft += 300;
  }
}
}
