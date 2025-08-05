import { Component } from '@angular/core';
import { CardHogarComponent } from "../card-hogar/card-hogar.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [CardHogarComponent],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})
export class CategoriasComponent {

  items = [
    { name: 'hogar', icon: '/assets/Imagenes/home.svg' },
  ];

  constructor( private router: Router) { }
  ir(tipo: string) {
    this.router.navigate(['/hogar'], { queryParams: { tipo } });
  }
// Información por cada imagen
  infoLists: string[][] = [
  ];

  // Controla visibilidad de cada lista
  showList: boolean[] = [false, false, false, false];

  toggleInfo(index: number): void {
    this.showList[index] = !this.showList[index];
  }
  getInfoList(index: number): string[] {
    return this.infoLists[index];
  }

  // Método para navegar a de interface



}
