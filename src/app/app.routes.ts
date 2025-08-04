import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ExploradorComponent } from './pages/explorador/explorador.component';
import { TrabajaNosotrosComponent } from './pages/trabaja-nosotros/trabaja-nosotros.component';
import { PromocionesComponent } from './pages/promociones/promociones.component';

export const routes: Routes = [

  {
    path:'', component:HomeComponent
  },

  {
    path:'explorar', component:ExploradorComponent
  },
  {
    path:'nosotros', component:TrabajaNosotrosComponent
  },
  {
    path:'promociones', component:PromocionesComponent
  }
];
