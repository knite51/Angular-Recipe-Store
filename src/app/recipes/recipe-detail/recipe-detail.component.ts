import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';
import { RecipeService } from '../recipes.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
 recipe: Recipe;
 id: number;

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
      this.route.params.subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.recipe = this.recipe = this.recipeService.getRecipe(this.id);
        }
      );
  }

  onEdit() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }
  onAddShopList() {
    this.recipeService.addRecipeToList(this.recipe.ingredients);
  }
  onDelete() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['']);
  }
}
