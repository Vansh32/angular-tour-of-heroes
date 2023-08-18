import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 2, name: 'Ichigo' },
      { id: 3, name: 'Goku' },
      { id: 4, name: 'Vegeta' },
      { id: 5, name: 'Spider-man' },
      { id: 6, name: 'Ikkaku' },
      { id: 7, name: 'Diljit' },
      { id: 8, name: 'Luffy' },
      { id: 9, name: 'Zoro' },
      { id: 10, name: 'Kakarot' },
    ];
    return { heroes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map((hero) => hero.id)) + 1
      : 1;
  }
}
