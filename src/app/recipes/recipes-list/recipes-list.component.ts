import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipes.service';
import { Recipes } from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipes[];
  constructor(private recpS: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recpS.getRecipes();
  }

}
