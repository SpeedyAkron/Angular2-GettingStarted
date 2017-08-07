import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { WelcomeComponent } from './home/welcome.component'
import { ProductListComponent } from './products/product-list.component'
import { ProductFilterPipe } from './products/product-filter.pipe'
import { StarComponent } from './shared/star.component';
import { ProductDetailComponent } from './products/product-detail.component'

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    HttpModule
 ],
  declarations: [ 
    AppComponent,
    WelcomeComponent,
    ProductListComponent,
    ProductFilterPipe,
    StarComponent,
    ProductDetailComponent
     ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
