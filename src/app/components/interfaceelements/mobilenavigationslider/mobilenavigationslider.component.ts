import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-mobilenavigationslider',
  templateUrl: './mobilenavigationslider.component.html',
  styleUrls: ['./mobilenavigationslider.component.css']
})
export class MobilenavigationsliderComponent implements OnInit {
 
  NavigationData = [
    {
      id: 0,
      title:'Главная',
      link:'/main',
      pstyle:'font-size:30px;margin-left:60px;position:absolute;margin-top:17px'
   
    },
    {
      id: 1,
      title:'Традиционная графика',
      link:'/traditionalart',
      pstyle:'font-size:20px;margin-left:20px;position:absolute;margin-top:30px'
    },
    {
      id: 2,
      title:'Компьютерная графика',
      link:'/digitalgraphic',
      pstyle:'font-size:20px;margin-left:20px;position:absolute;margin-top:30px'
    },
    {
      id: 3,
      title:'Рисунки на одежде',
      link:'/clothdrawing',
      pstyle:'font-size:20px;margin-left:20px;position:absolute;margin-top:30px'
    },
    {
      id: 4,
      title:'Фриланс работы',
      link:'/freelanceart',
      pstyle:'font-size:20px;margin-left:20px;position:absolute;margin-top:30px'
    },
    {
      id: 5,
      title:'Контакты',
      link:'/contacts',
      pstyle:'font-size:30px;margin-left:60px;position:absolute;margin-top:17px'
    }
  ]
  
  offhomebutton:boolean = false;
  opened = false;
  ontopslider:boolean = false;
  toggleSidebar() {
    this.opened = !this.opened;
    this.offhomebutton = !this.offhomebutton;
    this.ontopslider = !this.ontopslider;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
