import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { RecipeService } from './recipes/recipes.service';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';
import { Recipe } from './recipes/recipes.model';

@Injectable()
export class ServerService {
  constructor(private http: Http,
              private recipeService: RecipeService) { }
    storeRecipes() {
      return this.http.put('https://heroku-recipe.firebaseio.com/recipe.json', this.recipeService.getRecipes());
    }
    fetchRecipes() {
      return this.http.get('https://heroku-recipe.firebaseio.com/recipe.json')
      .map(
        (response: Response) => {
          const recipes: Recipe[] = response.json();
          for (const recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      ).subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.updateRecipes(recipes);
        }
      );
    }
}
