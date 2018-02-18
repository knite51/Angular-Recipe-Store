import { NgModule } from '@angular/core';
import { RecipesComponent } from './recipes.component';
import { Routes, RouterModule } from '@angular/router';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';

const recipesRoutes: Routes = [
  { path: 'recipes', component: RecipesComponent, children: [
      { path: '', component: RecipeStartComponent },
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(recipesRoutes)
  ],
  exports: [RouterModule]
})

export class RecipeRouteModule { }
