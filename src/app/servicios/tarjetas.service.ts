import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { Tarjeta } from '../interface/tarjetas';

@Injectable({
  providedIn: 'root'
})
export class TarjetasService {

  constructor(private http: HttpClient) { }

  private API_POKE='https://rickandmortyapi.com/api/location';

  obtenerIconos(): Observable<any> {
  return this.http.get<any>(this.API_POKE);
}
/** Obtener los personajes desde una lista de URLs (residentes) */
  obtenerPersonajesPorUrls(urls: string[]): Observable<Tarjeta[]> {
    return forkJoin(urls.map(url => this.http.get<Tarjeta>(url)));
  }

}
