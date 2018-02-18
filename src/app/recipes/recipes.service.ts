import { Recipe } from './recipes.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'Delicious- winks',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      // [
      //   new Ingredient('Fries', 20),
      //   new Ingredient('Ketchup', 10),
      // ]
    ),

    new Recipe('Big Fat Burger', 'Dont Overeat',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
      // [
      //   new Ingredient('Tomato', 20),
      //   new Ingredient('Eggs', 10),
      // ]
    ),
  ];

  getRecipes() {
    return this.recipes;
  }


}
