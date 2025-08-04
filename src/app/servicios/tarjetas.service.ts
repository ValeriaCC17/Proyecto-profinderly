import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TarjetasService {

  constructor(private http: HttpClient) { }

  private API_POKE='https://rickandmortyapi.com/api/character/?page=19'

  obtenerIconos(): Observable<any> {
  return this.http.get<any>(this.API_POKE);
}

}
