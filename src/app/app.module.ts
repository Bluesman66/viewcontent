import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemComponent } from "./item/item.component";
import { NestedComponent } from './nested/nested.component';
import { ColoryDirective } from './colory.directive';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    NestedComponent,
    ColoryDirective,
    ChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
