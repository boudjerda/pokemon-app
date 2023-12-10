import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styles: ``
})
export class DetailPokemonComponent implements OnInit{
  pokemonList:Pokemon[]
  pokemon:Pokemon | undefined;
  constructor(private route :ActivatedRoute,
    private router :Router,
    private pokemonService:PokemonService){

  }
ngOnInit(){
  this.pokemonService.getPokemonList()
  .subscribe(pokemonList => this.pokemonList = pokemonList);
  const pokemonId: string|null = this.route.snapshot.paramMap.get('id');
  if(pokemonId){
    this.pokemonService.getPokemonById(+pokemonId)
    .subscribe(pokemon => this.pokemon = pokemon);
  }else{
    this.pokemon = undefined
  }
  
}
goToPokemonList(){
  this.router.navigate(["/pokemons"])
}
goToEditPokemon(pokemon: Pokemon) {
  console.log("pokemon.id",pokemon.id)
  this.router.navigate(['/edit/pokemon', pokemon.id]);
}
deletePokemon(pokemon: Pokemon) {
  this.pokemonService.deletePokemonById(pokemon.id)
    .subscribe(() => this.goToPokemonList());
}
}
