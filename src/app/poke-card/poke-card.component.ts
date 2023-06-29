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
    normal: '#9099a1',
    fire: '#ff9c54',
    water: '#4d90d5',
    electric: '#f3d23b',
    grass: '#63bb5b',
    ice: '#74cec0',
    fighting: '#ce4069',
    poison: '#ab6ac8',
    ground: '#d97746',
    flying: '#8fa8dd',
    psychic: '#f97176',
    bug: '#90c12c',
    rock: '#c7b78b',
    ghost: '#5269ac',
    dragon: '#0a6dc4',
    dark: '#5a5366',
    steel: '#5a8ea1',
    fairy: '#ec8fe6',
  };

  @Input() pokemonFullData: any;

  // for 2color types version
  // getBackgroundColor(): string {
  //   const type1 = this.pokemonFullData.types[0].type.name;
  //   const type2 = this.pokemonFullData.types[1]?.type.name;
  
  //   if (type2) {
  //     return `linear-gradient(135deg, ${this.typeColors[type1]} 0%, ${this.typeColors[type1]} 60%, ${this.typeColors[type2]} 50%, ${this.typeColors[type2]} 100%)`;
  //   }
  
  //   return this.typeColors[type1] || 'gray';
  // }

  // for 2color gradient version
  getBackgroundColor(): string {
    const type = this.pokemonFullData.types[0].type.name;
  
    return `linear-gradient(135deg, ${this.typeColors[type]} 10%, rgb(220, 220, 220) 0%)`;
  }
  

  // getBackgroundColor(): string {
  //   const typeName = this.pokemonFullData.types[0].type.name;
  //   return this.typeColors[typeName] || 'gray';
  // }
}
