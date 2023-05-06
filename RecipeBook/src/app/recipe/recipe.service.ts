import {Recipe} from "./recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'This is simply a test',
      'https://media.cnn.com/api/v1/images/stellar/prod/140430115517-06-comfort-foods.jpg?q=w_1080,h_720,x_100,y_0,c_crop',
      [
        new Ingredient('apple', 1),
        new Ingredient('buget', 10)
      ]
    ),
    new Recipe(
      'A test recipe 2',
      'This is simply a test 2 ',
      'https://media.cnn.com/api/v1/images/stellar/prod/140430115517-06-comfort-foods.jpg?q=w_1080,h_720,x_100,y_0,c_crop',
      [
        new Ingredient('apple', 1)
      ]
    ),
  ];

  recipeSelected = new EventEmitter<Recipe>();

  constructor(private slService: ShoppingListService) {
  }

  getAllRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
