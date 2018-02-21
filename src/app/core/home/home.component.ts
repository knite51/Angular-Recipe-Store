import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.open('abksales://atbtechsoft.com', '_system', 'location=no');
    // window.open('abksales://', '_system', 'location=no');
    // window.open('atbtechsoft.com/abksales',, '_system', 'location=no');
  }

}
