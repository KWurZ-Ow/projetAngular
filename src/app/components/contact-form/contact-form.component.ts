import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})

export class ContactFormComponent implements OnInit {
  
  contactForm: FormGroup
  static readonly EMAIL = /^.+\@\S+\.\S+$/;
  submitted: boolean = false;

  constructor() {
    this.contactForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.pattern(ContactFormComponent.EMAIL)]),
      subject: new FormControl(null, [Validators.required]),
      comment: new FormControl(null, [Validators.required])
    })
   }

  submitForm(){
    console.log(this.contactForm.value);
    if (this.contactForm.valid){
      this.submitted = true
      this.contactForm.reset()
    }
    
  }

  resetForm(){
    this.submitted = false;
  }

  ngOnInit(): void {
  }

}
