import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/hero';
import { HEROES } from 'src/app/protoss-heroes';
import { Input } from '@angular/core';


@Component({
  selector: 'app-protoss-units',
  templateUrl: './protoss-units.component.html',
  styleUrls: ['./protoss-units.component.css']
})
export class ProtossUnitsComponent implements OnInit {
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