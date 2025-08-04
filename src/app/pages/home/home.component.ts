import { Component } from '@angular/core';
import { ImagenComponent } from "../../componentes/imagen/imagen.component";
import { IconosComponent } from "../../componentes/iconos/iconos.component";
import { CategoriasComponent } from "../../componentes/categorias/categorias.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ImagenComponent, CategoriasComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
}
