import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ExploradorComponent } from './pages/explorador/explorador.component';
import { TrabajaNosotrosComponent } from './pages/trabaja-nosotros/trabaja-nosotros.component';
import { PromocionesComponent } from './pages/promociones/promociones.component';
import { CardHogarComponent } from './componentes/card-hogar/card-hogar.component';
import { CollageLimpiezaComponent } from './componentes/collage-limpieza/collage-limpieza.component';
import { IconosComponent } from './componentes/iconos/iconos.component';

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
  },
  {
    path: 'hogar', component:CardHogarComponent
  },
  {
    path: 'limpieza', component:CollageLimpiezaComponent
  },
  {
    path: 'api',component:IconosComponent
  }
];
