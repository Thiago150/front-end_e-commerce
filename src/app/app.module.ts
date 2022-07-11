import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componets/shared/header/header.component';
import { FooterComponent } from './componets/shared/footer/footer.component';
import { NavComponent } from './componets/shared/nav/nav.component';
import { BookstoreAppComponent } from './componets/bookstore-app/bookstore-app.component';
import { FilterComponent } from './componets/bookstore-app/filter/filter.component';
import { ProductListComponent } from './componets/bookstore-app/product-list/product-list.component';
import { ProductItemComponent } from './components/bookstore-app/product-list/product-item/product-item.component';
import { BookService } from './componets/bookstore-app/product-list/product-list.component.service';
import { HttpClient, HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    BookstoreAppComponent,
    FilterComponent,
    ProductListComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
