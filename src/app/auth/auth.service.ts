import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  token: string;

    constructor(private router: Router) { }

  onSignUp(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(
      error => console.log(error)
    );
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password).then(
      response => {
        this.router.navigate(['recipes']);
        firebase.auth().currentUser.getToken().then(
          (token: string) => this.token = token
        );
      }
    ).catch(
      error => console.log(error)
    );
  }

  getToken() {
    firebase.auth().currentUser.getToken().then(
      (token: string) => this.token = token
    );
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }

  logOut() {
    firebase.auth().signOut();
    this.token = null;

  }

}
