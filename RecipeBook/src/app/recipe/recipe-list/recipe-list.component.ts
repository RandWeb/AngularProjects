import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from "./recipe.model";

@Component({
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  constructor() {
  }

  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simply a test', 'https://media.cnn.com/api/v1/images/stellar/prod/140430115517-06-comfort-foods.jpg?q=w_1080,h_720,x_100,y_0,c_crop'),
    new Recipe('A test recipe 2', 'This is simply a test 2 ', 'https://media.cnn.com/api/v1/images/stellar/prod/140430115517-06-comfort-foods.jpg?q=w_1080,h_720,x_100,y_0,c_crop'),
  ];
  @Output() recipeWasSelected = new EventEmitter<Recipe>;

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
