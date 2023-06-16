import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonNumber'
})
export class PokemonNumberPipe implements PipeTransform {
  transform(id: number): string {
    const paddedId = id.toString().padStart(4, '0');
    return `#${paddedId}`;
  }
}