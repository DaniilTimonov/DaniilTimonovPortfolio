import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-freelanceartslider',
  templateUrl: './freelanceartslider.component.html',
  styleUrls: ['./freelanceartslider.component.css']
})
export class FreelanceartsliderComponent implements OnInit {

  title = 'FREELANCESLIDER';

	images: any[] = [
		{
			previewImageSrc:
'assets/images/freelance/freelance01.jpg',

			alt: '',
			title: ''
		},
		{
			previewImageSrc:
      'assets/images/freelance/freelance06.jpg',

			alt: '',
			title: ''
		},
		{
			previewImageSrc:
      'assets/images/freelance/freelance03.jpg',
	
			alt: '',
			title: ''
		},
		{
			previewImageSrc:
      'assets/images/freelance/freelance10.jpg',
		
			alt: '',
			title: ''
		},
		{
			previewImageSrc:
      'assets/images/freelance/freelance07.jpg',
		
			alt: '',
			title: ''
		},
		{
			previewImageSrc:
      'assets/images/freelance/freelance09.jpg',
		
			alt: '',
			title: ''
		}
	];






  constructor() { }

  ngOnInit(): void {
  }

}
