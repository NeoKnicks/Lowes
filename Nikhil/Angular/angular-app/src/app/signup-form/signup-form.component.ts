import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})

export class SignupFormComponent implements OnInit {

  signupStatus = false;
  
  formFields = {
    fName : "Nikhil",
    lName : "Bilgi",
    age : 30,
    company : "Lowe's India"
  }
  

  constructor() { }

  ngOnInit() {
  }

  signUp() {
    console.log(this.formFields);
  }

  register() {
    this.signupStatus = !this.signupStatus;
  }

}
