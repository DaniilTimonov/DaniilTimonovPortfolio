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
'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210203171024/CSSTutorial.png',
			thumbnailImageSrc:
'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210203171024/CSSTutorial.png',
			alt: 'Cascading Style Sheet',
			title: 'CSS'
		},
		{
			previewImageSrc:
'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210322182256/AngularJS-Tutorial.png',
			thumbnailImageSrc:
'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210322182256/AngularJS-Tutorial.png',
			alt: 'Angular for Front end',
			title: 'Angular'
		},
		{
			previewImageSrc:
				'https://media.geeksforgeeks.org/wp-content/cdn-uploads/Java.png',
			thumbnailImageSrc:
				'https://media.geeksforgeeks.org/wp-content/cdn-uploads/Java.png',
			alt: 'Java Programming Language',
			title: 'Java'
		},
		{
			previewImageSrc:
'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220401124017/HTML-Tutorial.png',
			thumbnailImageSrc:
'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220401124017/HTML-Tutorial.png',
			alt: 'HyperText Markup Language',
			title: 'HTML'
		},
	];






  constructor() { }

  ngOnInit(): void {
  }

}
