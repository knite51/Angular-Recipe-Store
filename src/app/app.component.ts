import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  featured = 'recipe';
  onSelectNav(datas:string){
    this.featured = datas;
  }
}
