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
    // создание фабрик для компонеетов
    const bannerComponentFactory = this.componentFactoryResolver.resolveComponentFactory(BannerComponent);
    const banner2ComponentFactory = this.componentFactoryResolver.resolveComponentFactory(Banner2Component);
    // и вывод его (компонент будет выведен после представления)
    this.view.createComponent(bannerComponentFactory);

    // вывод в определенное место в элемент с директивой HostDirective (т.н. viewcontainer)
    // получим ссылку на контейнер представления
    const viewContainerRef = this.host.view;
    // вывод компонента и передача данных в динамический компонент
    const componentRef = viewContainerRef.createComponent(bannerComponentFactory);
    (<BannerComponent>componentRef.instance).text = 'HAPPY NEW 2019 YEAR!';
    setTimeout(() => {
      (<BannerComponent>componentRef.instance).text = 'WOW!';
    }, 4000);

    setTimeout(() => {
      // очистка контейнера представления
      viewContainerRef.clear();
      // и динамический вывод другого компоенета
      viewContainerRef.createComponent(banner2ComponentFactory);
    }, 6000);

    // другой способ динамического создания компонента
    this.myComponent = BannerComponent;
    // динамическая замена компонента на другой
    setTimeout(() => {
      this.myComponent = Banner2Component;
    }, 3000);
  }

}
