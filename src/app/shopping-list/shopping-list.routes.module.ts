import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingListComponent } from './shopping-list.component';
import { AppRoutesModule } from '../app.routes.module';

const ShopRoute: Routes = [
  { path: 'shopping-list', component: ShoppingListComponent }
];

@NgModule({
  imports: [
    AppRoutesModule,
    RouterModule.forChild(ShopRoute)
  ],
  exports: [ RouterModule ]
})

export class ShoppingListRoutes { }
