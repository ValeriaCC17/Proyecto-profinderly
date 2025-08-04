import { Component } from '@angular/core';

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})
export class CategoriasComponent {
categoriasVisibles = [false, false, false, false];

  toggleCategorias(index: number): void {
    this.categoriasVisibles[index] = !this.categoriasVisibles[index];
  }
}
