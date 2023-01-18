import { Component, OnInit } from '@angular/core';
import { Picture } from 'src/app/picture';
import { PICTURES } from 'src/app/traditional_art_container';
import { Input } from '@angular/core';


@Component({
  selector: 'traditional_art',
  templateUrl: './traditional_art.component.html',
  styleUrls: ['./traditional_art.component.css']
})
export class TraditionalArt implements OnInit {
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
