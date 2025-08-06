import { Component, OnInit } from '@angular/core';
import { TarjetasService } from '../../servicios/tarjetas.service';
import { Tarjeta } from '../../interface/tarjetas';
import { CategoriasComponent } from "../categorias/categorias.component";

@Component({
  selector: 'app-imagen',
  standalone: true,
  imports: [CategoriasComponent],
  templateUrl: './imagen.component.html',
  styleUrl: './imagen.component.css'
})
export class ImagenComponent implements OnInit {

  residents: Tarjeta[] = [];

  constructor(private tarjetaServicio: TarjetasService) {}

  ngOnInit(): void {
    this.tarjetaServicio.obtenerIconos().subscribe(data => {
      const urls = data.results[0].residents.slice(0, 5);
      this.mostrarResidentes(urls);
    });
  }

  mostrarResidentes(urls: string[]) {
    this.tarjetaServicio.obtenerPersonajesPorUrls(urls).subscribe((respuestas: Tarjeta[]) => {
      this.residents = respuestas;
    });
  }

}
