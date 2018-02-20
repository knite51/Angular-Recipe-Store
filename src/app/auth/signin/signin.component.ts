import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signInFormGroup: FormGroup;

  constructor(private siginService: AuthService) { }

  ngOnInit() {
    this.signInFormGroup = new FormGroup({
      'email': new FormControl(null, Validators.email),
      'password': new FormControl(null, Validators.required)
    });
  }

  onLogin() {
    const email = this.signInFormGroup.value.email;
    const password = this.signInFormGroup.value.password;
    this.siginService.signinUser(email, password);
  }

}
