import {
  Directive,
  ElementRef, HostBinding,
  HostListener,
  OnInit,
  Renderer2
} from '@angular/core';
import {Event} from "@angular/router";

@Directive({
  selector: '[BetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @HostBinding('style.backgroundColor') backgroundColor:string = 'transparent';
  constructor(private elRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit(): void {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'red');
  }

  @HostListener('mouseenter') onMouseOver(eventData: Event) {
  //  this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'red');
  this.backgroundColor = 'red';
  }

  @HostListener('mouseleave') onMouseLeave(eventData: Event) {
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = 'transparent';
  }

}
