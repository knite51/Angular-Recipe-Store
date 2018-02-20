import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';

import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { SharedModule } from './shared/shared.module';

import { AppRoutesModule } from './app.routes.module';

import { AuthService } from './auth/auth.service';
import { AuthGuardService } from './auth/auth-guard-service';
import { RecipeService } from './recipes/recipes.service';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { ServerService } from './server.service';




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutesModule,
    CoreModule,
    ShoppingListModule,
    SharedModule,
    AuthModule
  ],
  providers: [
    RecipeService,
    ShoppingListService, 
    ServerService, 
    AuthService, 
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
