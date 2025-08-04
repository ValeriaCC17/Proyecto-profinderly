import { Component, OnInit } from '@angular/core';
import { TarjetasService } from '../../servicios/tarjetas.service';
import { Tarjeta } from '../../interface/tarjetas';

@Component({
  selector: 'app-iconos',
  standalone: true,
  imports: [],
  templateUrl: './iconos.component.html',
  styleUrl: './iconos.component.css'
})
export class IconosComponent implements OnInit {
  categorias: Tarjeta[] = [];
  categoriaSeleccionada: number = 0;

  constructor(private tarjetaServicio: TarjetasService) {}

  ngOnInit(): void {
    this.tarjetaServicio.obtenerIconos().subscribe(data => {
      this.categorias = data.results
      console.log(data);
      ;
    });
  }
}
