import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appColory]'
})
export class ColoryDirective {

  constructor() { }

  @HostBinding('style.color') color = 'red';

}
