import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray } from '@angular/forms';


import { RecipeService } from '../recipes.service';
import { Recipe } from '../recipes.model';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  recipeGroup: FormGroup;

  editMode = false;
  editedItemIndex: number;



  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router) { }
  ngOnInit() {
      this.route.params.subscribe(
        (params: Params) => {
          this.editedItemIndex = +params['id'];
          this.editMode = params['id'] != null ;
          this.initForm();
        }
      );
    }

    onAddingredient() {
      (<FormArray>this.recipeGroup.get('ingredients')).push(
        new FormGroup({
          'name': new FormControl(null),
          'amount': new FormControl(null)
        })
      );
    }

    onRemoveIngredient(index: number) {
      (<FormArray>this.recipeGroup.get('ingredients')).removeAt(index);
    }

    onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  onSubmit() {
    if (this.editMode) {
      this.recipeService.updateRecipe(this.editedItemIndex, this.recipeGroup.value);
    } else {
      this.recipeService.addRecipe(this.recipeGroup.value);
    }
    this.onCancel();
  }

  private initForm() {
    let recipeName = '';
    let recipeDescription = '';
    let recipeImg = '';
    const recipeIngredients = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipeService.editRecipe(this.editedItemIndex);
      recipeName = recipe.name;
      recipeDescription = recipe.description;
      recipeImg = recipe.imgPath;
      if (recipe['ingredients']) {
        for (const ingredient of recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              'name': new FormControl(ingredient.name),
              'amount': new FormControl(ingredient.amount)
            })
          );
        }
      }
    }

    this.recipeGroup = new FormGroup({
        'name': new FormControl(recipeName),
        'imgPath': new FormControl(recipeImg),
        'description': new FormControl(recipeDescription),
        'ingredients': recipeIngredients
      });
  }
}
