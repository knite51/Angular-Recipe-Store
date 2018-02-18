import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';

import { RecipeRouteModule } from './recipes/recipes.route.module';
import { RecipeModule } from './recipes/recipe.module';
import { CoreModule } from './core/core.module';
import { AppRoutesModule } from './app.routes.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { ShoppingListRoutes } from './shopping-list/shopping-list.routes.module';
import { RecipeService } from './recipes/recipes.service';
import { SharedModule } from './shared/shared.module';




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutesModule,
    CoreModule,
    RecipeModule,
    RecipeRouteModule,
    ShoppingListModule,
    ShoppingListRoutes,
    SharedModule
  ],
  providers: [ RecipeService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
