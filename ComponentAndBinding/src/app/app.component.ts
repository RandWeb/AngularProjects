import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements: [{ type: string, name: string, content: string }] = [
    {
      type: 'Server',
      name: 'Test Server',
      content: 'Just a test'
    }
  ];
}
