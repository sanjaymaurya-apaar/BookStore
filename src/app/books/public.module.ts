import { NgModule } from '@angular/core';
import { AllBooksComponent } from './components/all-books/all-books.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { PublicComponent } from './public.component';
import { PublicRoutingModule } from './public-routing.module';




@NgModule({
  declarations: [
    AllBooksComponent,
    BookDetailComponent,
    PublicComponent
  ],
  imports: [
    PublicRoutingModule
  ]
})
export class PublicModule { }
