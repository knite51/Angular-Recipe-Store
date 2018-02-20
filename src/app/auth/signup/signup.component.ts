import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  SignupFormGroup: FormGroup;

  constructor() { }

  ngOnInit() {
    this.SignupFormGroup = new FormGroup({
      'email': new FormControl(null, Validators.email),
      'password': new FormControl(null, Validators.required)
    });
  }

  onSignup() {
    const email = this.SignupFormGroup.value.email;
    const password = this.SignupFormGroup.value.password;
    // console.log(email, password);
  }
}
