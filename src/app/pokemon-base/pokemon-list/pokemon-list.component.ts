import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

// decorator
@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})


export class PokemonListComponent implements OnInit {

  pokemon: string;

  //pokemons: string = ""

  pokemons!: Pokemon[];

  // pokemons: Pokemon[] = [
  //   {
  //     id: 1,
  //     name: 'pikachu',
  //     type: 'electric',
  //     isCool: true,
  //     isStylish: false
  //   },
  //   {
  //     id: 2,
  //     name: 'squirtle',
  //     type: 'water',
  //     isCool: false,
  //     isStylish: true
  //   },
  //   {
  //     id: 3,
  //     name: 'charmander',
  //     type: 'fire',
  //     isCool: true,
  //     isStylish: true
  //   }
  // ]
  constructor(private pokemonService: PokemonService){
    this.pokemon = "Yata!";
  }

  handleRemove(event: Pokemon){
    this.pokemons = this.pokemons.filter((pokemon: Pokemon) => {
      return pokemon.id !== event.id
    })
  }

  ngOnInit(): void {
    // console.log("ngOnInit fired!")
    // console.log(this.pokemon)
    // this.pokemons = this.pokemonService.getPokemons();

    this.pokemonService.getPokemons().subscribe((data: Pokemon[]) => {
      console.log(data)
      this.pokemons = data
    })
  }
}
