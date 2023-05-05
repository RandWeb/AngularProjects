import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {BasicHighlightDirective} from "./basic-highlight/basic-highlight.directive";

@NgModule({
  declarations: [
    AppComponent,
    BasicHighlightDirective
  ],
  imports: [
    BrowserModule
  ],
  exports:[
    BasicHighlightDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
