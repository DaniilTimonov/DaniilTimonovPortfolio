import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-digitalgraphicslider',
  templateUrl: './digitalgraphicslider.component.html',
  styleUrls: ['./digitalgraphicslider.component.css']
})
export class DigitalgraphicsliderComponent implements OnInit {
  title = 'DIGITALGRAPHICSLIDER';

	images: any[] = [
		{
			previewImageSrc:
'assets/images/digitaldraw/digitaldraw01.jpg',

			alt: '',
			title: ''
		},
		{
			previewImageSrc:
'assets/images/digitaldraw/digitaldraw08.jpg',

			alt: '',
			title: ''
		},
		{
			previewImageSrc:
				'assets/images/digitaldraw/digitaldraw04.jpg',
	
			alt: '',
			title: ''
		},
		{
			previewImageSrc:
			'assets/images/digitaldraw/digitaldraw02.jpg',
		
			alt: '',
			title: ''
		},
		{
			previewImageSrc:
			'assets/images/digitaldraw/digitaldraw06.jpg',
		
			alt: '',
			title: ''
		},
		{
			previewImageSrc:
			'assets/images/digitaldraw/digitaldraw03.jpg',
		
			alt: '',
			title: ''
		}
	];




  constructor() { }

  ngOnInit(): void {
  }

}
