import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {
  startEditing = new Subject<number>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatos', 10)
  ];

  getIngredients() {
    return this.ingredients;
  }
  getIngredient(index: number) {
    return this.ingredients[index];
  }
  addIngredient(ingredients: Ingredient) {
    this.ingredients.push(ingredients);
  }
  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
  }
  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
  }
  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
  }
}
