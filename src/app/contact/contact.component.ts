import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'

import { EmailService } from '../services/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [EmailService]
})

export class ContactComponent {
  constructor(private _email: EmailService) { }
  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    phone: new FormControl(''),
    company: new FormControl(''),
    subject: new FormControl(''),       
    message: new FormControl('', Validators.required)    
  })

  
  emailSent = false
  sentClicked = false

  async sendForm() {
    this.sentClicked = true
    await this.email.sendEmail(this.contactForm)
    this.emailSent = true
  }

  public get email() {
    return this._email
  }


  nameMessageText = ''
  myMessageClass = ''
  // myBorderClass = ''
}