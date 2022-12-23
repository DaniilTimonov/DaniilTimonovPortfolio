import { Component, OnInit } from '@angular/core';
import { Picture } from 'src/app/picture';
import { PICTURES } from 'src/app/freelance_art_container';
import { Input } from '@angular/core';



@Component({
  selector: 'app-freelance-art',
  templateUrl: './freelance-art.component.html',
  styleUrls: ['./freelance-art.component.css']
})
export class FreelanceArtComponent implements OnInit {
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