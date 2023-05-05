import {Directive, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';
import {Event} from "@angular/router";

@Directive({
  selector: '[BetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private elRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit(): void {
   // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'red');
  }

  @HostListener('mouseenter') onMouseOver(eventData:Event){
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'red');
  }  @HostListener('mouseleave') onMouseLeave(eventData:Event){
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
  }

}
