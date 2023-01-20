import { Component, OnInit } from '@angular/core';
import { Picture } from 'src/app/picture';
import { PICTURES } from 'src/app/digital_art_container';
import { Input } from '@angular/core';


@Component({
  selector: 'digital_graphic',
  templateUrl: './digital_graphic.component.html',
  styleUrls: ['./digital_graphic.component.css']
})
export class DigitalGraphic implements OnInit {
  pics = PICTURES;
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
