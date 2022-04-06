import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductHeaderComponent } from './product-header/product-header.component';
import { ProductFooterComponent } from './product-footer/product-footer.component';
import { ProductContentComponent } from './product-content/product-content.component';
import { ContentListComponent } from './product-content/content-list/content-list.component';
import { ContentTitleComponent } from './product-content/content-title/content-title.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductHeaderComponent,
    ProductFooterComponent,
    ProductContentComponent,
    ContentListComponent,
    ContentTitleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
