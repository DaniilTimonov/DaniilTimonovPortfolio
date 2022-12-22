import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/hero';
import { HEROES } from 'src/app/cloth_art_container';
import { Input } from '@angular/core';


@Component({
  selector: 'drawing_on_cloth',
  templateUrl: './drawing_on_cloth.component.html',
  styleUrls: ['./drawing_on_cloth.component.css']
})
export class DrawingOnCloth implements OnInit {
  heroes = HEROES;
  check:boolean = false;
  fadeblack:boolean = false;

  constructor() { }

  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.check = true;
    this.fadeblack = true;
  }
  onClose() {
    delete this.selectedHero ;
    this.check = false;
    this.fadeblack = false;
  }

  ngOnInit(): void {
  }
}

