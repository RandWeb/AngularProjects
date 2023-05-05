import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RecipeBook';
  featureLoaded: string = 'recipe'

  constructor() {
  }

  onNavigate(feature: string) {
    console.log(feature);
    this.featureLoaded = feature;
  }
}
