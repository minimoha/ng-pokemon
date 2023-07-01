import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon, PokemonType } from '../../models/pokemon';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-template-form',
  templateUrl: './pokemon-template-form.component.html',
  styleUrls: ['./pokemon-template-form.component.css']
})
export class PokemonTemplateFormComponent implements OnInit {

  pokemon!: Pokemon;
  pokemonType: PokemonType[] = [
    {
      key: 0,
      value: 'Fire'
    },
    {
      key: 1,
      value: 'Water'
    }
  ]

  constructor(private pokemonService: PokemonService, 
    private router: Router, 
    private route: ActivatedRoute) { }

  toggleIsCool(object: any){
    console.log(object)
  }

  handleSubmit(object: any){
    console.log(object)
  }


  ngOnInit() {
    this.pokemon = {} as Pokemon;
    this.route.params.subscribe((data: Params) => {
      this.pokemonService.getPokemon(1).subscribe((data: Pokemon) => {
        this.pokemon = data;
      })
    })
    // this.pokemonService.getPokemon(1).subscribe((data: Pokemon) => {
    //   this.pokemon = data;
    // })
  }


  back() : void {
    this.router.navigate(['/pokemon'])
  }

}
