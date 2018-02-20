import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { ServerService } from '../../server.service';
import { RecipeService } from '../../recipes/recipes.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  recipeSaved = false;

  constructor(private serverService: ServerService,
              private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onSave() {
    this.serverService.storeRecipes().subscribe(
      (response: Response) => {
        this.recipeSaved = true;
      }
    );
  }

  onFetch() {
    this.serverService.fetchRecipes();
  }

}
