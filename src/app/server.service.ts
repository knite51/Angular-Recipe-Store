import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { RecipeService } from './recipes/recipes.service';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';
import { Recipe } from './recipes/recipes.model';
import { AuthService } from './auth/auth.service';

@Injectable()
export class ServerService {
  constructor(private http: Http,
              private recipeService: RecipeService,
              private authService: AuthService) { }
    storeRecipes() {
      const token = this.authService.getToken();
      return this.http.put('https://heroku-recipe.firebaseio.com/recipe.json?auth=' + token, this.recipeService.getRecipes());
    }
    fetchRecipes() {
      const token = this.authService.getToken();
      return this.http.get('https://heroku-recipe.firebaseio.com/recipe.json?auth=' + token)
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
