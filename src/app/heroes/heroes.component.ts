import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent {
  
  constructor(private heroService: HeroService, private messageService: MessageService) {}

  selectedHero?: Hero;
  heroes: Hero [] = [];

  onSelect(hero: Hero): void {
  this.selectedHero = hero;
  this.messageService.add(`Heroes Component: Select Hero id = ${hero.id}`);
  }

  ngOnInit(): void {
    this.getHeroes();
  }  



  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
}


