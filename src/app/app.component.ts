import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Pokemon } from './models/pokemon';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  favAnimal: string;
  pokemonName: string = ""
  newName: string = ""

  pokemons: Pokemon[] = [
    {
      id: 1,
      name: 'pikachu',
      type: 'electric',
      isCool: true,
      isStylish: false,
      "acceptTerms": false

    },
    {
      id: 2,
      name: 'squirtle',
      type: 'water',
      isCool: false,
      isStylish: true,
      "acceptTerms": false

    }
  ]

  pokemoniscool = {}
  pokemonisStylish = true


  constructor(){
    this.title = "root";
    this.favAnimal = "Wow";
  }


  handleClick(value: any){
    console.log(value)
  }

  handleChange(event: any){
    this.newName = event.target.value;
  }
}
