import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appStyleDrective]',
})

export class StyleDirective {
  constructor() {
  }
  @HostBinding('style.backgroundColor') background = 'transparent';
  @HostBinding('style.border') border: string;

  @HostListener('mouseenter') onHover(eventData: Event) {
    this.background = 'pink';
    this.border = 'none';
  }
  @HostListener('mouseleave') onleave (eventData: Event) {
    this.background = 'transparent';
    this.border = '';
  }
}
