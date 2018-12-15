import {
  AfterContentInit, Component, ContentChild, ContentChildren, ElementRef, OnInit, QueryList,
  ViewChild,
  ViewChildren,
  AfterViewInit
} from '@angular/core';

import { NestedComponent } from '../nested/nested.component';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})

export class ItemComponent implements OnInit, AfterContentInit, AfterViewInit {

  constructor() { }

  @ContentChild('hcontent') headerElement: ElementRef;
  @ContentChild('ncontent', { read: NestedComponent }) nestedComponentByRef: NestedComponent;
  @ContentChild(NestedComponent) nestedComponent: NestedComponent;
  @ContentChildren(NestedComponent) nestedComponents: QueryList<NestedComponent>;

  @ViewChild('hview') viewHeaderElement: ElementRef;
  @ViewChild('nview', { read: NestedComponent }) viewNestedComponentByRef: NestedComponent;
  @ViewChild(NestedComponent) viewNestedComponent: NestedComponent;
  @ViewChildren(NestedComponent) viewNestedComponents: QueryList<NestedComponent>;

  ngAfterContentInit(): void {
    console.log('--- AfterContentInit ---');
    console.log(this.headerElement.nativeElement);
    console.log(this.nestedComponentByRef);
    console.log(this.nestedComponent);
    console.log(this.nestedComponents.toArray());
  }

  ngAfterViewInit(): void {
    console.log('--- AfterViewInit ---');
    console.log(this.viewHeaderElement.nativeElement);
    console.log(this.viewNestedComponentByRef);
    console.log(this.viewNestedComponent);
    console.log(this.viewNestedComponents.toArray());
  }

  ngOnInit() {
    console.log('--- OnInit ---');
  }

}
