import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // window.open('abksales://atbtechsoft.com');
    window.open('abksales://');
    // window.open('atbtechsoft.com/abksales');
  }

}
