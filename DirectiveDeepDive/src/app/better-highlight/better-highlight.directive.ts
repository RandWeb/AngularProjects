import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener, Input,
  OnInit,
  Renderer2
} from '@angular/core';
import {Event} from "@angular/router";

@Directive({
  selector: '[BetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input('BetterHighlight') highLightColor: string = "red";
  @Input() defaultColor: string = "transparent";

  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

  constructor(private elRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit(): void {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'red');
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') onMouseOver(eventData: Event) {
    //  this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'red');
    //this.backgroundColor = 'red';
    this.backgroundColor = this.highLightColor;
  }

  @HostListener('mouseleave') onMouseLeave(eventData: Event) {
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    //this.backgroundColor = 'transparent';
    this.backgroundColor = this.defaultColor;
  }

}
