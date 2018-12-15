import { Component, ComponentFactoryResolver, OnInit, ViewContainerRef } from '@angular/core';

import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent extends ItemComponent implements OnInit {

  constructor(protected view: ViewContainerRef, protected componentFactoryResolver: ComponentFactoryResolver) {
    super(view, componentFactoryResolver);
  }

  ngOnInit() {
  }

}
