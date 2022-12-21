import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigationburger',
  templateUrl: './navigationburger.component.html',
  styleUrls: ['./navigationburger.component.css']
})
export class NavigationburgerComponent implements OnInit {
NavigationData = [
  {
    id: 0,
    title:'Главная',
    link:'/main'
  },
  {
    id: 1,
    title:'Рисунки',
    link:'/traditionalart'
  },
  {
    id: 2,
    title:'Компьютерная графика',
    link:'/digitalgraphic'
  },
  {
    id: 3,
    title:'Рисунки на одежде',
    link:'/clothdrawing'
  },
  {
    id: 4,
    title:'Фриланс работы',
    link:'/freelanceart'
  },
  {
    id: 5,
    title:'Контакты',
    link:'/contacts'
  }


]


  constructor() { }

  ngOnInit(): void {
  }

}
