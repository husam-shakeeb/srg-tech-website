import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import * as emailjs from '@emailjs/browser'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm = new FormGroup({
    subject: new FormControl(''),
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    company: new FormControl(''),
    message: new FormControl('', Validators.required),
    phone: new FormControl('')
  })
 

  ngAfterViewInit() {
    emailjs.init("user_JBaPN7atg1zx0DWAoXtIA")
  }

  sendEmail() {
    var templateParams = {
      user_subject: this.contactForm.controls.subject.value,
      user_name: this.contactForm.controls.name.value,
      user_phone: this.contactForm.controls.phone.value,
      user_message: this.contactForm.controls.message.value,
      user_company: this.contactForm.controls.company.value,
    }  
    
    if (!this.contactForm.valid) {
      alert('form invalid')
      return
    }   

    

    emailjs.send('service_neeb9kq', 'template_ap8u45n', templateParams)
      .then(function (response: any) {
        console.log('SUCCESS!', response.status, response.text)
      }, function (error: any) {
        console.log('FAILED...', error)
      })
  }
}
