import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokeDataService {

  constructor(private http: HttpClient) {}

  getPokemonData() {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=300`).pipe()
    // TODO: error handling
  }

  getBasicPokemonData(name: string) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }
}
