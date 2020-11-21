import { Directive, ElementRef, Input, HostListener, AfterContentChecked } from '@angular/core';

@Directive({
  selector: '[appHighlightStatus]'
})
export class HighlightStatusDirective implements AfterContentChecked {

  @Input('appHighlightStatus') status;
  private SUCCESS = '#218838'
  private SECONDARY = '#5A6268'
  private INFO = '#138496'

  constructor(private el : ElementRef) { }

  ngAfterContentChecked() {
    // console.log(this.status);
    switch(this.status) {
      case 'active':
        this.setColor(this.SUCCESS);
        break;
      case 'inactive':
        this.setColor(this.SECONDARY,'white');
        break;
      case 'unknown':
        this.setColor(this.INFO);
        break;
      default:
        this.setColor('white')
    }
  }

  setColor(backgroundColor: string , foregroundColor: string = 'black'){
    this.el.nativeElement.style.backgroundColor = backgroundColor;
    this.el.nativeElement.style.color = foregroundColor;
  }

}
