import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appColory]',
  exportAs: 'colory'
})
export class ColoryDirective {

  constructor() { }

  @HostBinding('style.color') color = 'red';

  changeColor(color: string) {
    this.color = color;
  }
}
