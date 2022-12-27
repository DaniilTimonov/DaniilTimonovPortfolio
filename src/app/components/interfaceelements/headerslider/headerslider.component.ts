import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headerslider',
  templateUrl: './headerslider.component.html',
  styleUrls: ['./headerslider.component.css']
})
export class HeadersliderComponent implements OnInit {
	title = 'GFG';

	images: any[] = [
		{
			previewImageSrc:
'assets/images/favouritesslider/classicart6.jpg',

			alt: '',
			title: ''
		},
		{
			previewImageSrc:
'assets/images/favouritesslider/clothdraw02.jpg',

			alt: '',
			title: ''
		},
		{
			previewImageSrc:
				'assets/images/favouritesslider/digitaldraw02.jpg',
	
			alt: '',
			title: ''
		},
		{
			previewImageSrc:
			'assets/images/favouritesslider/digitaldraw07.jpg',
		
			alt: '',
			title: ''
		},
		{
			previewImageSrc:
			'assets/images/favouritesslider/freelance03.jpg',
		
			alt: '',
			title: ''
		},
		{
			previewImageSrc:
			'assets/images/favouritesslider/freelance08.jpg',
		
			alt: '',
			title: ''
		}
	];






  constructor() { }

  ngOnInit(): void {
  }

}
