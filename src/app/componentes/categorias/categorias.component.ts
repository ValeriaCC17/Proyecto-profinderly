import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  showInfo: boolean[] = [];

  constructor(private tarjetaServicio: TarjetasService) {}

  ngOnInit(): void {
    this.tarjetaServicio.obtenerIconos().subscribe((data) => {
      const urls = data.results[0].residents.slice(0, 20);
      this.tarjetaServicio.obtenerPersonajesPorUrls(urls).subscribe((respuestas: Tarjeta[]) => {
        this.humanos = respuestas.filter(p => p.species === 'Human');
        this.aliens = respuestas.filter(p => p.species === 'Alien');
        this.robots = respuestas.filter(p => p.species === 'Robot');
        this.showInfo = new Array(urls.length).fill(false);
      });
    });
  }

  // ✅ MÉTODO NECESARIO PARA QUE FUNCIONE EL (click)="toggleInfo($index)"
  toggleInfo(index: number): void {
    this.showInfo[index] = !this.showInfo[index];
  }
}





