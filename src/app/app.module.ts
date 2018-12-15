import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemComponent } from "./item/item.component";
import { NestedComponent } from './nested/nested.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    NestedComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
