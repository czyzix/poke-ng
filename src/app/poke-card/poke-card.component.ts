import { Component, Input } from '@angular/core';

interface TypeColors {
  [key: string]: string;
}

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.css']
})
export class PokeCardComponent {

  typeColors: TypeColors = {
    normal: '#A8A77A',
    fire: '#EE8130',
    water: '#6390F0',
    electric: '#F7D02C',
    grass: '#7AC74C',
    ice: '#96D9D6',
    fighting: '#C22E28',
    poison: '#A33EA1',
    ground: '#E2BF65',
    flying: '#A98FF3',
    psychic: '#F95587',
    bug: '#A6B91A',
    rock: '#B6A136',
    ghost: '#735797',
    dragon: '#6F35FC',
    dark: '#705746',
    steel: '#B7B7CE',
    fairy: '#D685AD',
  };

  @Input() pokemonFullData: any;

  // for 2color version
  // getBackgroundColor(): string {
  //   const type1 = this.pokemonFullData.types[0].type.name;
  //   const type2 = this.pokemonFullData.types[1]?.type.name;
  
  //   if (type2) {
  //     return `linear-gradient(135deg, ${this.typeColors[type1]} 0%, ${this.typeColors[type1]} 60%, ${this.typeColors[type2]} 50%, ${this.typeColors[type2]} 100%)`;
  //   }
  
  //   return this.typeColors[type1] || 'gray';
  // }
  

  getBackgroundColor(): string {
    const typeName = this.pokemonFullData.types[0].type.name;
    return this.typeColors[typeName] || 'gray';
  }
}
