import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { RecipeService } from './recipes/recipes.service';

@Injectable()
export class ServerService {
  constructor(private http: Http,
              private recipeService: RecipeService) { }
    storeRecipes() {
      return this.http.put('https://heroku-recipe.firebaseio.com/recipe.json', this.recipeService.getRecipes());
    }
}
