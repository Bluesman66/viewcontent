import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { ChildComponent } from './child/child.component';
import { ColoryDirective } from './colory.directive';
import { DelayDirective } from './delay.directive';
import { ItemComponent } from './item/item.component';
import { NestedComponent } from './nested/nested.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    NestedComponent,
    ColoryDirective,
    ChildComponent,
    DelayDirective,
    BannerComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [
    BannerComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
