import { Component, OnInit, Input } from '@angular/core';
import { Recipes } from '../../recipes.model';
import { RecipeService } from '../../recipes.service';


@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css'],
})
export class RecipesItemComponent implements OnInit {
  @Input() recipes: Recipes;

  constructor(private recipeS: RecipeService) { }

  ngOnInit() { }

  }

