import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes:Hero[] = [
      new Hero(11, 'Dr Nice 11', this.rnd()),
      new Hero(12, 'Narco', this.rnd()),
      new Hero(13, 'Bombasto', this.rnd()),
      new Hero(14, 'Celeritas', this.rnd()),
      new Hero(15, 'Magneta', this.rnd()),
      new Hero(16, 'RubberMan', this.rnd()),
      new Hero(17, 'Dynama', this.rnd()),
      new Hero(18, 'Dr IQ', this.rnd()),
      new Hero(19, 'Magma', this.rnd()),
      new Hero(20, 'Tornado', this.rnd()),
      new Hero(21, '21', this.rnd()),
    ];
    return {heroes};
  }

  rnd() {
      return Math.round(Math.random() * 5);
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
