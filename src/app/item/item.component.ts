import {
    AfterContentInit, AfterViewInit, Component, ComponentFactoryResolver, ContentChild,
    ContentChildren, ElementRef, OnInit, QueryList, ViewChild, ViewChildren, ViewContainerRef
} from '@angular/core';

import { BannerComponent } from '../banner/banner.component';
import { Banner2Component } from '../banner2/banner2.component';
import { HostDirective } from '../host.directive';
import { NestedComponent } from '../nested/nested.component';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})

export class ItemComponent implements OnInit, AfterContentInit, AfterViewInit {

  constructor(protected view: ViewContainerRef, protected componentFactoryResolver: ComponentFactoryResolver) { }

  public myComponent;

  // доступ к контентой части компонента
  @ContentChild('hcontent') headerElement: ElementRef;
  @ContentChild('ncontent', { read: NestedComponent }) nestedComponentByRef: NestedComponent;
  @ContentChild(NestedComponent) nestedComponent: NestedComponent;
  @ContentChildren(NestedComponent) nestedComponents: QueryList<NestedComponent>;

  // доступ к представлению компонента
  @ViewChild(HostDirective) host: HostDirective;

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
    // динамическое создание компонента
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(BannerComponent);
    // и вывод его (компонент будет выведен после представления)
    this.view.createComponent(componentFactory);
    // вывод в определенное место в элемент с директивой HostDirective (т.н. viewcontainer)
    this.host.view.createComponent(componentFactory);

    this.myComponent = BannerComponent;

    setTimeout(() => {
      this.myComponent = Banner2Component;
    }, 3000);
  }

}
