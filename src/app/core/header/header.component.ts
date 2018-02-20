import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { ServerService } from '../../server.service';
import { RecipeService } from '../../recipes/recipes.service';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  recipeSaved = false;

  constructor(private serverService: ServerService,
              private recipeService: RecipeService,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  onSave() {
    this.serverService.storeRecipes().subscribe(
      (response: Response) => {
        this.recipeSaved = true;
      }
    );
  }

  onFetch() {
    this.serverService.fetchRecipes();
  }

  onLogOut(){
    this.authService.logOut();
    this.router.navigate(['signin']);
  }

}
