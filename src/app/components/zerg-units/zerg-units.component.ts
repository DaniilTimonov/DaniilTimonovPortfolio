import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/hero';
import { HEROES } from 'src/app/zerg-heroes';
import { Input } from '@angular/core';


@Component({
  selector: 'zerg-units',
  templateUrl: './zerg-units.component.html',
  styleUrls: ['./zerg-units.component.css']
})
export class ZergUnitsComponent implements OnInit {
  heroes = HEROES;

  constructor() { }

  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  onClose() {
    delete this.selectedHero ;
  }



  ngOnInit(): void {
  }

}
