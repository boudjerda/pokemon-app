import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon';
import { PokemonFormComponent } from '../pokemon-form/pokemon-form.component';
@Component({
  selector: 'app-edit-pokemon',
  template: `
    <h2 class="center">Editer {{ pokemon?.name }}</h2>
    <p *ngIf="pokemon" class="center">
      <img [src]="pokemon.picture">
    </p>
    <app-pokemon-form  *ngIf="pokemon" [pokemon]="pokemon"></app-pokemon-form>
  `,
  styles: ``
})
export class EditPokemonComponent implements OnInit {
  pokemon: Pokemon|undefined;
  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) { }
  ngOnInit() {
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id');
    if(pokemonId) {
      this.pokemonService.getPokemonById(+pokemonId)
    .subscribe(pokemon => this.pokemon = pokemon);
    console.log("bjbkjn")
    } else {
      this.pokemon = undefined;
    }
  }

}