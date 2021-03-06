import { Component, OnInit } from '@angular/core';
import contactList from '../contacts';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Object[];
  newContact: Object = {};
  constructor() { }

  ngOnInit() {
    this.contacts = contactList;
  }

  addContact(e){
    console.log("Add contact has been called");
    if(this.newContact!=undefined){
      this.contacts.push(this.newContact);
      this.newContact = {};
  }
}
}