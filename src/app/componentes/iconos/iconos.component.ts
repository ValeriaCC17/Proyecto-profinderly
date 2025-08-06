import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarjetasService } from '../../servicios/tarjetas.service';
import { Location } from '../../interface/location';
import { Tarjeta } from '../../interface/tarjetas';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-iconos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './iconos.component.html',
  styleUrl: './iconos.component.css'
})
export class IconosComponent implements OnInit {
  categorias: Location[] = [];
  residents: Tarjeta[] = [];

  constructor(private tarjetaServicio: TarjetasService) {}

  ngOnInit(): void {
    this.tarjetaServicio.obtenerIconos().subscribe(data => {
      this.categorias = data.results;
    });
  }

 mostrarResidentes(urls: string[]) {
  const urlsLimitadas = urls.slice(0, 20);
  this.tarjetaServicio.obtenerPersonajesPorUrls(urlsLimitadas).subscribe((respuestas: Tarjeta[]) => {
    this.residents = respuestas;
  });
}

}



 

