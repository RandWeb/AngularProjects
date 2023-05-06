﻿import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from "@angular/core";

@Directive({
  selector: '[Dropdown]'
})
export class DropdownDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  @HostBinding('class.show') isOpen = false;

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
    let ul = this.el.nativeElement.querySelector('ul');
    if (this.isOpen){
      this.renderer.addClass(ul,'show')
    }else {
      this.renderer.removeClass(ul,'show')
    }
  }

}
