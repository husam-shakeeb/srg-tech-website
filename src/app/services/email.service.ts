import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import * as emailjs from '@emailjs/browser'

@Injectable ()
export class EmailService {
  

  
  constructor() { 
    emailjs.init("user_JBaPN7atg1zx0DWAoXtIA")  
  }
  
  sendEmail(contactForm: FormGroup) {
    const templateParams = {
      user_email: contactForm.controls['email'].value,
      user_subject: contactForm.controls['subject'].value,
      user_name: contactForm.controls['name'].value,
      user_phone: contactForm.controls['phone'].value,
      user_message: contactForm.controls['message'].value,
      user_company: contactForm.controls['company'].value,
    }  
    
    if (!contactForm.valid) {
      alert('Please make sure all required fields are filled and try again')    
    }   
    
   return emailjs.send('service_5157qsd', 'template_ap8u45n', templateParams)
      .then( (response: any) => {
        console.log('SUCCESS!', response.status, response.text)          
      }, (error: any) => {
        console.log('FAILED...', error)        
      })
      
  }
}
