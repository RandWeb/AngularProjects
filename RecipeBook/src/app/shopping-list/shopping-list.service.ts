import {EventEmitter} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {Recipe} from "../recipe/recipe.model";

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('apple', 10)
  ];

  addIngredient(ingredient: Ingredient) {
    this.ingredients.unshift(ingredient);
    this.ingredientsChanged.emit(this.ingredients);
  }

  getAllIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  addIngredients(ingredients: Ingredient[]) {
    /*    for (const ingredient of ingredients) {
          this.addIngredient(ingredient);
        }*/
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients);
    console.log(ingredients)
  }
}
