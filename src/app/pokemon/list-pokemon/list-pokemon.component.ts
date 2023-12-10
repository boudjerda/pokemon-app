import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { POKEMONS } from '../mock-pokemon-list';
import { Pokemon } from '../pokemon';
import { BorderCardDirective } from '../border-card.directive';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';
import { Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styles: ``
})
export class ListPokemonComponent implements OnInit {
  pokemonList :Pokemon[] ;
  constructor(
    private router :Router,
    private pokemonService:PokemonService
    ){

  }
  ngOnInit(){
    this.pokemonService.getPokemonList()
    .subscribe(pokemonList => this.pokemonList = pokemonList);
  }
  goToPokemon(pokemon : Pokemon){
    this.router.navigate([`/pokemon/${pokemon.id}`])
  }

}
