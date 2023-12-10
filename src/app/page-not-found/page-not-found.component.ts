import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',

  template: `
  <div class='center'>
      <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png"/>
      <h1>Hey, cette page n'existe pas !</h1>
      <a (click)="goToPokemonList()"  class="waves-effect waves-teal btn-flat">
        Retourner à l' accueil
      </a>
  </div>
  `,
  styles: ``
})
export class PageNotFoundComponent {
  constructor(private router :Router){

  }
  goToPokemonList(){
    this.router.navigate(["/pokemons"])
  }
}
