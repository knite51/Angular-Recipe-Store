import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutesModule } from '../app.routes.module';
import { RecipeService } from '../recipes/recipes.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    AppRoutesModule,
    SharedModule
  ],
  providers: [ ],
  exports: [ AppRoutesModule, HeaderComponent ]
})

export class CoreModule { }
