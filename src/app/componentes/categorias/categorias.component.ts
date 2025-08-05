import { Component } from '@angular/core';

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})
export class CategoriasComponent {
// Información por cada imagen
  infoLists: string[][] = [
    ['Dirección', 'Teléfono', 'Correo'],
    ['Tipo de mascota', 'Edad', 'Raza'],
    ['Nombre', 'Edad', 'Rol'],
    ['Producto', 'Precio', 'Cantidad']
  ];

  // Controla visibilidad de cada lista
  showList: boolean[] = [false, false, false, false];

  toggleInfo(index: number): void {
    this.showList[index] = !this.showList[index];
  }
}
