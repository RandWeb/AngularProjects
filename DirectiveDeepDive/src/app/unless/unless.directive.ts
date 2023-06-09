import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[Unless]'
})
export class UnlessDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private vcRef: ViewContainerRef) {
  }

  @Input() set Unless(condition: boolean) {
    if (!condition) {
        this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  }


}
