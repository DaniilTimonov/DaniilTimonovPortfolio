import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/hero';
import { HEROES } from 'src/app/freelance_art_container';
import { Input } from '@angular/core';



@Component({
  selector: 'app-freelance-art',
  templateUrl: './freelance-art.component.html',
  styleUrls: ['./freelance-art.component.css']
})
export class FreelanceArtComponent implements OnInit {
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