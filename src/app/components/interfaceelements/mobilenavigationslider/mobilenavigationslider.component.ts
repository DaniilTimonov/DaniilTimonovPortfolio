import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-mobilenavigationslider',
  templateUrl: './mobilenavigationslider.component.html',
  styleUrls: ['./mobilenavigationslider.component.css']
})
export class MobilenavigationsliderComponent implements OnInit {
  opened = false;

  toggleSidebar() {
    this.opened = !this.opened;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
