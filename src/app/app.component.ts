import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBki3xDgLA6k45AtcglowDOn3IxtFthN2c',
      authDomain: 'heroku-recipe.firebaseapp.com',
    });
  }
}
