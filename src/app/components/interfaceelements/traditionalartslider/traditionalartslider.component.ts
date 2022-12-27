import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-traditionalartslider',
  templateUrl: './traditionalartslider.component.html',
  styleUrls: ['./traditionalartslider.component.css']
})
export class TraditionalartsliderComponent implements OnInit {

  title = 'TRADITIONALARTSLIDER';

	images: any[] = [
		{
			previewImageSrc:
'assets/images/handdraw/classicart1.jpg',

			alt: '',
			title: ''
		},
		{
			previewImageSrc:
'assets/images/handdraw/classicart5.jpg',

			alt: '',
			title: ''
		},
		{
			previewImageSrc:
				'assets/images/handdraw/classicart4.jpg',
	
			alt: '',
			title: ''
		},
		{
			previewImageSrc:
			'assets/images/handdraw/classicart3.jpg',
		
			alt: '',
			title: ''
		},
		{
			previewImageSrc:
			'assets/images/handdraw/classicart7.jpg',
		
			alt: '',
			title: ''
		},
		{
			previewImageSrc:
			'assets/images/handdraw/classicart6.jpg',
		
			alt: '',
			title: ''
		}
	];




  constructor() { }

  ngOnInit(): void {
  }

}
