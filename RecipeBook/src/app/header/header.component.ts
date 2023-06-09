﻿import {Component, EventEmitter, OnInit,Output} from "@angular/core";

@Component({
  selector:'header',
  templateUrl:'./header.component.html',
  styleUrls:['./header.component.css']
})
export class HeaderComponent implements OnInit{

  @Output() featureSelected = new EventEmitter();
  constructor() {
  }
  ngOnInit() {
  }

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
}
