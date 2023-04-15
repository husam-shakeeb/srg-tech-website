import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'

import { EmailServiceService } from '../services/email-service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [EmailServiceService]
})

export class ContactComponent {
  constructor(private _email: EmailServiceService) { }
  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    phone: new FormControl(''),
    company: new FormControl(''),
    subject: new FormControl(''),       
    message: new FormControl('', Validators.required)
    
  })

  public get email() {
    return this._email
  }


  nameMessageText = ''
  myMessageClass = ''
  // myBorderClass = ''
}