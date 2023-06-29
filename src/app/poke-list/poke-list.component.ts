import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { PokeDataService } from '../services/poke-data.service';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.css']
})
export class PokeListComponent implements OnInit {

  pokemons: any[] = [];

  constructor(
    private pokeDataService: PokeDataService
  ) {}

  ngOnInit(): void {
    this.pokeDataService.getPokemonData()
      .subscribe((response: any) => {
        const requests = response.results.map((result: any) =>
          this.pokeDataService.getBasicPokemonData(result.name)
        );

        forkJoin(requests).subscribe((uniqResponses: any) => {
          this.pokemons = uniqResponses.sort((a: any, b: any) => a.id - b.id);
        });
      });
  }

  // We use forkJoin to combine multiple observables into a single observable that emits an array of responses when all requests complete.
}
