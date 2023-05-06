import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from "../recipe.model";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  constructor(private recipeService: RecipeService) {
  }

  recipes: Recipe[] = [];
  @Output() recipeWasSelected = new EventEmitter<Recipe>;

  ngOnInit(): void {
    this.recipes = this.recipeService.getAllRecipes();
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
