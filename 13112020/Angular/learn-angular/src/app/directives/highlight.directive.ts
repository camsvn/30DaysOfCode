import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(private el : ElementRef) {
    el.nativeElement.style.backgroundColor = 'purple';
    el.nativeElement.style.color = 'white';
    el.nativeElement.style.height = '35px';
    el.nativeElement.style.lineHeight = '35px';
    el.nativeElement.style.textAlign = 'center';
   }

   @Input() colorOnClick: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('orange');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('purple');
  }

  @HostListener('mouseup') onClick(){
    this.highlight(this.colorOnClick);
  }

  private highlight(color: string) {
    let style = this.el.nativeElement.style;
    style.backgroundColor = color;
    color === 'orange' ? style.color = 'black' : style.color = 'white';   
  }
}
