import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drawingonclothslider',
  templateUrl: './drawingonclothslider.component.html',
  styleUrls: ['./drawingonclothslider.component.css']
})
export class DrawingonclothsliderComponent implements OnInit {

  title = 'DRAWINGONCLOTHSLIDER';

	images: any[] = [
		{
			previewImageSrc:
'assets/images/clothdraw/clothdraw01.jpg',

			alt: '',
			title: ''
		},
		{
			previewImageSrc:
      'assets/images/clothdraw/clothdraw02.jpg',

			alt: '',
			title: ''
		},
		{
			previewImageSrc:
      'assets/images/clothdraw/clothdraw03.jpg',
	
			alt: '',
			title: ''
		},
		{
			previewImageSrc:
      'assets/images/clothdraw/clothdraw04.jpg',
		
			alt: '',
			title: ''
		},
		{
			previewImageSrc:
      'assets/images/clothdraw/clothdraw01.jpg',
		
			alt: '',
			title: ''
		},
		{
			previewImageSrc:
      'assets/images/clothdraw/clothdraw02.jpg',
		
			alt: '',
			title: ''
		}
	];





  constructor() { }

  ngOnInit(): void {
  }

}
