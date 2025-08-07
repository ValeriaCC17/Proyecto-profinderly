import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TarjetasService } from '../../servicios/tarjetas.service';
import { Tarjeta } from '../../interface/tarjetas';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-informacion-listado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './informacion-listado.component.html',
  styleUrl: './informacion-listado.component.css'
})
export class InformacionListadoComponent implements OnInit {
  personaje!: Tarjeta;

  constructor(
    private route: ActivatedRoute,
    private tarjetasService: TarjetasService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('ID recibido:', id);
    if (id) {
      this.tarjetasService.obtenerPersonajePorId (+id).subscribe(data => {
        this.personaje = data;
      });
    }
  }
}
