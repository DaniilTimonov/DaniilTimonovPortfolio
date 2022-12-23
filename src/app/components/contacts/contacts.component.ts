import { Component, OnInit } from '@angular/core';
import { CONTACTSBOXES } from 'src/app/contactboxes_container';
import { ContactBox } from 'src/app/contactboxes';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
contactboxes = CONTACTSBOXES;




  constructor() { }

  ngOnInit(): void {
  }

}
