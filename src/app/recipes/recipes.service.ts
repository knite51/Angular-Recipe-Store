// tslint:disable-next-line:quotemark
import { Recipes } from "./recipes.model";

export class RecipeService {
 private recipes: Recipes[] = [
    new Recipes(
      'Tasty Schnitzel',
      'Delicious- winks',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG'),
    new Recipes('Big Fat Burger', 'Dont Overeat',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg'),
  ];
  getRecipes() {
   return this.recipes.slice();
  }

}
