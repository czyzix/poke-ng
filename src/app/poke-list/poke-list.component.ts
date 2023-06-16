import { Component, OnInit } from '@angular/core';
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
      .subscribe((response: any) => {response.results.forEach((result: any) => {
        this.pokeDataService.getBasicPokemonData(result.name)
          .subscribe((uniqResponse: any) => {
            this.pokemons.push(uniqResponse);
            
          })
      })})
  }

}
