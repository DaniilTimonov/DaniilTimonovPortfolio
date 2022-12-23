import { Component, OnInit } from '@angular/core';
import { Picture } from 'src/app/picture';
import { PICTURES } from 'src/app/cloth_art_container';
import { Input } from '@angular/core';


@Component({
  selector: 'drawing_on_cloth',
  templateUrl: './drawing_on_cloth.component.html',
  styleUrls: ['./drawing_on_cloth.component.css']
})
export class DrawingOnCloth implements OnInit {
  heroes = PICTURES;
  check:boolean = false;
  fadeblack:boolean = false;

  constructor() { }

  selectedPicture?: Picture;
  onSelect(picture: Picture): void {
    this.selectedPicture = picture;
    this.check = true;
    this.fadeblack = true;
  }
  onClose() {
    delete this.selectedPicture ;
    this.check = false;
    this.fadeblack = false;
  }

  ngOnInit(): void {
  }
}

