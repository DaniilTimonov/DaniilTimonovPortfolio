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
'',

			alt: '',
			title: ''
		},
		{
			previewImageSrc:
'',

			alt: '',
			title: ''
		},
		{
			previewImageSrc:
				'',
	
			alt: '',
			title: ''
		},
		{
			previewImageSrc:
			'',
		
			alt: '',
			title: ''
		},
		{
			previewImageSrc:
			'',
		
			alt: '',
			title: ''
		},
		{
			previewImageSrc:
			'',
		
			alt: '',
			title: ''
		}
	];






  constructor() { }

  ngOnInit(): void {
  }

}
