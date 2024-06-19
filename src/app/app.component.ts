import { Component, OnInit, Output } from '@angular/core';
import { Pokemon } from './models/pokemon.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'poke-buds';

  public items: { itemId: number; itemName: string; fileLocation: string }[] = [
    {
      itemId: 1,
      itemName: 'Poké Ball',
      fileLocation: '../assets/items/ball1_poke.png',
    },
    {
      itemId: 2,
      itemName: 'Great Ball',
      fileLocation: '../assets/items/ball2_great.png',
    },
    {
      itemId: 3,
      itemName: 'Ultra Ball',
      fileLocation: '../assets/items/ball3_ultra.png',
    },
    {
      itemId: 4,
      itemName: 'Master Ball',
      fileLocation: '../assets/items/ball4_master.png',
    },
    { itemId: 5, itemName: 'Run', fileLocation: '../assets/items/run.png' },
  ];

  public runCounter = 5;
  public pbCounter = 4;
  public gbCounter = 3;
  public ubCounter = 2;
  public mbCounter = 1;

  public pbThreshold = 100;
  public gbThreshold = 150;
  public ubThreshold = 200;
  public mbThreshold = 255;

  public randomNumberBall = 0;
  public catchRatePoke = 0;
  public catchResult: boolean = false;
  public lastItemUsed: number = 0;

  public pokemons: Pokemon[] = [];
  public catches: boolean[] = [];
  public results: { pokemon: Pokemon; caught: boolean; itemUsed: number }[] =
    [];

  public endGame: boolean = false;

  @Output() randomPokemonNumber!: number;

  constructor() {}

  ngOnInit() {
    document.body.classList.add('bg-img');
    this.newEncounter();
    this.results.pop();
  }

  gameStats() {
    if (
      this.pbCounter + this.gbCounter + this.ubCounter + this.mbCounter ==
      0
    ) {
      this.endGame = true;
    }
  }

  newEncounter() {
    this.randomPokemonNumber = Math.floor(Math.random() * 151) + 1;
    this.pokemonCaught(this.pokemons[this.pokemons.length - 1]);
    this.gameStats();
  }

  // throwBall(pokeball: number, catchRate: number): boolean {
  throwBall(pokeball: number): boolean {
    this.randomNumberBall = Math.floor(Math.random() * 256) + 1;

    switch (pokeball) {
      case 1: {
        this.usePB();
        this.catchResult =
          this.randomNumberBall < this.pbThreshold ? true : false;
        this.catchResult ? this.newEncounter() : '';
        this.gameStats();
        return this.catchResult;
      }
      case 2: {
        this.useGB();
        this.catchResult =
          this.randomNumberBall < this.gbThreshold ? true : false;
        this.catchResult ? this.newEncounter() : '';
        this.gameStats();
        return this.catchResult;
      }
      case 3: {
        this.useUB();
        this.catchResult =
          this.randomNumberBall < this.ubThreshold ? true : false;
        this.catchResult ? this.newEncounter() : '';
        this.gameStats();
        return this.catchResult;
      }
      case 4: {
        this.useMB();
        this.catchResult =
          this.randomNumberBall < this.mbThreshold ? true : false;
        this.catchResult ? this.newEncounter() : '';
        this.gameStats();
        return this.catchResult;
      }
      default: {
        this.gameStats();
        return false;
      }
    }
  }

  useRun() {
    this.lastItemUsed = 5;
    if (this.runCounter > 0) {
      this.runCounter = this.runCounter - 1;
    }
    this.catchResult = false;
    this.newEncounter();
  }

  usePB() {
    this.lastItemUsed = 1;
    if (this.pbCounter > 0) {
      this.pbCounter = this.pbCounter - 1;
    }
  }

  useGB() {
    this.lastItemUsed = 2;
    if (this.gbCounter > 0) {
      this.gbCounter = this.gbCounter - 1;
    }
  }

  useUB() {
    this.lastItemUsed = 3;
    if (this.ubCounter > 0) {
      this.ubCounter = this.ubCounter - 1;
    }
  }

  useMB() {
    this.lastItemUsed = 4;
    if (this.mbCounter > 0) {
      this.mbCounter = this.mbCounter - 1;
    }
  }

  pokemonList(pokemonCaught: Pokemon) {
    this.pokemons.push(pokemonCaught);
  }

  pokemonCaught(pokemonCaught: Pokemon) {
    this.results.push({
      pokemon: pokemonCaught,
      caught: this.catchResult,
      itemUsed: this.lastItemUsed,
    });
    console.log('Pokemons:', this.results);
  }

  playAgain() {
    window.location.reload();
  }
}
