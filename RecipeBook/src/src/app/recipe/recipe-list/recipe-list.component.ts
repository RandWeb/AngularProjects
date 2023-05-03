import {Component, OnInit} from '@angular/core';
import {Recipe} from "./recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{
constructor() {
}
  recipes:Recipe[] = [
    new Recipe('A test recipe','This is simply a test','https://media.cnn.com/api/v1/images/stellar/prod/140430115517-06-comfort-foods.jpg?q=w_1080,h_720,x_100,y_0,c_crop'),
    new Recipe('A test recipe','This is simply a test','https://media.cnn.com/api/v1/images/stellar/prod/140430115517-06-comfort-foods.jpg?q=w_1080,h_720,x_100,y_0,c_crop'),
  ];

  ngOnInit(): void {
  }

}
