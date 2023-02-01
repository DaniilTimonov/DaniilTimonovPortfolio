import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favouritepicturesslider',
  templateUrl: './favouritepicturesslider.component.html',
  styleUrls: ['./favouritepicturesslider.component.css']
})
export class FavouritepicturessliderComponent implements OnInit {
  title = 'FAVOURITESCONTENT';

	images: any[] = [
		{
			previewImageSrc:
'assets/images/clothdraw/clothdraw02.jpg',

			alt: '',
			title: ''
		},
		{
			previewImageSrc:
'assets/images/digitaldraw/digitaldraw03.jpg',

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
			'assets/images/digitaldraw/digitaldraw01.jpg',
		
			alt: '',
			title: ''
		},
		{
			previewImageSrc:
			'assets/images/handdraw/classicart2.jpg',
		
			alt: '',
			title: ''
		},
		{
			previewImageSrc:
      'assets/images/handdraw/classicart9.jpg',
		
			alt: '',
			title: ''
		}
	];

  constructor() { }

  ngOnInit(): void {
  }

}
