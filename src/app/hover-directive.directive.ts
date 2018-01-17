import { Directive, ElementRef, HostListener } from '@angular/core';
import { Input } from '@angular/core/src/metadata/directives';

@Directive({
  selector: '[appHoverDirective]'
})
export class HoverDirectiveDirective {
  @Input('highlightColor') highlightColor;

  constructor(private el: ElementRef) { }

  private changeColor(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

  @HostListener('mouseenter')
  onmouseenter(){
    this.changeColor(this.highlightColor)

  }

  @HostListener('mouseleave')
  onmouseleave(){
    this.changeColor(null);
  }

}
