import { Component, OnInit } from '@angular/core';
import { Tarjeta } from '../../interface/tarjetas';
import { TarjetasService } from '../../servicios/tarjetas.service';

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css',
})
export class CategoriasComponent implements OnInit {
  humanos: Tarjeta[] = [];
  aliens: Tarjeta[] = [];
  robots: Tarjeta[] = [];

  showInfoHumanos: boolean[] = [];
  showInfoAliens: boolean[] = [];
  showInfoRobots: boolean[] = [];

  constructor(private tarjetaServicio: TarjetasService) {}

  ngOnInit(): void {
    this.tarjetaServicio.obtenerIconos().subscribe((data) => {
      // Tomamos residentes de múltiples ubicaciones (hasta 5 ubicaciones)
      const urls = data.results
        .slice(0, 5) // más de una ubicación
        .flatMap((loc: any) => loc.residents)
        .slice(0, 50); // limita la cantidad total

      this.tarjetaServicio.obtenerPersonajesPorUrls(urls).subscribe((respuestas: Tarjeta[]) => {
        this.humanos = respuestas.filter(p => p.species === 'Human');
        this.aliens = respuestas.filter(p => p.species === 'Alien');
        this.robots = respuestas.filter(p => p.species === 'Robot');

        this.showInfoHumanos = new Array(this.humanos.length).fill(false);
        this.showInfoAliens = new Array(this.aliens.length).fill(false);
        this.showInfoRobots = new Array(this.robots.length).fill(false);
      });
    });
  }

  toggleInfo(tipo: 'humano' | 'alien' | 'robot', index: number): void {
    if (tipo === 'humano') {
      this.showInfoHumanos[index] = !this.showInfoHumanos[index];
    } else if (tipo === 'alien') {
      this.showInfoAliens[index] = !this.showInfoAliens[index];
    } else if (tipo === 'robot') {
      this.showInfoRobots[index] = !this.showInfoRobots[index];
    }
  }
}
