import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-hogar',
  standalone: true,
  imports: [],
  templateUrl: './card-hogar.component.html',
  styleUrl: './card-hogar.component.css'
})
export class CardHogarComponent {
  constructor( private router: Router) { }
    ir(tipo: string) {
      this.router.navigate(['/api'], { queryParams: { tipo } });
    }

}
