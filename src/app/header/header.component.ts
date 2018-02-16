import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})

export class HeaderComponent {
  @Output() recipeSelect = new EventEmitter<string>();
  
  onSelect(feature){
    this.recipeSelect.emit(feature);
  }
}