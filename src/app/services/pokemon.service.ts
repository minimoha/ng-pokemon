import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../models/pokemon';
import { Observable } from 'rxjs';

const POKEMON_API = 'http://localhost:3000/pokemon';

@Injectable({
  providedIn: 'root'
})

export class PokemonService {

constructor(private http: HttpClient) { }

getPokemon(id: number){
  return this.http.get<Pokemon>(`${POKEMON_API}/1`);
}

getPokemons(): Observable<Pokemon[]>{
  return this.http.get<Pokemon[]>(POKEMON_API);
}

// getPokemons(): Pokemon[]{
//   return [
//     {
//       id: 1,
//       name: 'pikachu',
//       type: 'electric',
//       isCool: true,
//       isStylish: false
//     },
//     {
//       id: 2,
//       name: 'squirtle',
//       type: 'water',
//       isCool: false,
//       isStylish: true
//     },
//     {
//       id: 3,
//       name: 'charmander',
//       type: 'fire',
//       isCool: true,
//       isStylish: true
//     }
//   ]
// }

}
