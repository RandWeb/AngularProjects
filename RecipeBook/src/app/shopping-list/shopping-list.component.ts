import {Component} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";

@Component({
  selector: 'shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  constructor() {
  }

  ingredients:Ingredient[]=[
    new Ingredient("Apples",5),
    new Ingredient("Tomato",10)
  ];

}
