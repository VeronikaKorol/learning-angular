import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: [ './table.component.scss' ]
})
export class TableComponent implements OnInit {

  heroes    // var name
  :Hero[]   // var type
   = [];    // def value

   newHeroName:string;

  constructor(
      private heroService: HeroService) { }

  ngOnInit() {
    this.heroService.getHeroes().subscribe(result => {
        this.heroes = result;
        console.log(result);
    })
  }

  add(): void {
    let name = this.newHeroName.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(a:Hero):void {
    this.heroes = this.heroes.filter(h => h !== a);
    this.heroService.deleteHero(a).subscribe();
  }

  onRate(hero:Hero, event:any) {
    console.log('New rate for:', hero.name, event.newValue);
    hero.rating = event.newValue;
  }

}
