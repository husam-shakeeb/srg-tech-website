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
    subject: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    email: new FormControl('email@form.com', [Validators.required, Validators.email]),
    company: new FormControl(''),
    message: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.pattern('[ +()0-9]+'))
  })

  logData() {
    var templateParams = {
      user_subject: this.contactForm.controls.subject.value,
      user_name: this.contactForm.controls.name.value,
      user_phone: this.contactForm.controls.phone.value,
      user_message: this.contactForm.controls.message.value,
    }
    emailjs.init("user_JBaPN7atg1zx0DWAoXtIA")

    emailjs.send('service_neeb9kq', 'template_ap8u45n', templateParams)
      .then(function (response) {
        console.log('SUCCESS!', response.status, response.text)
      }, function (error) {
        console.log('FAILED...', error)
      })
  }
}
