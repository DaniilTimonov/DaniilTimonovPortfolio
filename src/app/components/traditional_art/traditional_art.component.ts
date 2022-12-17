import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/hero';
import { HEROES } from 'src/app/traditional_art_container';
import { Input } from '@angular/core';


@Component({
  selector: 'traditional_art',
  templateUrl: './traditional_art.component.html',
  styleUrls: ['./traditional_art.component.css']
})
export class TraditionalArt implements OnInit {
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
