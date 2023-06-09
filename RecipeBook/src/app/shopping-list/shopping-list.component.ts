import {Component, OnInit} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "./shopping-list.service";

@Component({
  selector: 'shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  //providers: [ShoppingListService]
})
export class ShoppingListComponent implements OnInit {
  constructor(private slService: ShoppingListService) {
  }

  ingredients: Ingredient[] = [];

  ngOnInit(): void {
    this.ingredients = this.slService.getAllIngredients();
    this.slService.ingredientsChanged.subscribe((ingredients: Ingredient[]) => {
      this.ingredients = ingredients;
    })
  }
}
