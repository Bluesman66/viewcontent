import {
    AfterContentInit, Component, ContentChild, ContentChildren, ElementRef, OnInit, QueryList
} from '@angular/core';

import { NestedComponent } from '../nested/nested.component';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})

export class ItemComponent implements OnInit, AfterContentInit {

  constructor() { }
  @ContentChild('h') headerElement: ElementRef;
  @ContentChild(NestedComponent) nestedComponent: NestedComponent;
  @ContentChildren(NestedComponent) nestedComponents: QueryList<NestedComponent>;

  ngAfterContentInit(): void {
    console.log(this.headerElement.nativeElement);
    console.log(this.nestedComponent);
    console.log(this.nestedComponents.toArray());
  }

  ngOnInit() {
  }

}
