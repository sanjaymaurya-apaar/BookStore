import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { AllBooksComponent } from './components/all-books/all-books.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';



@NgModule({
  declarations: [
    HomeComponent,
    AllBooksComponent,
    BookDetailComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PublicModule { }
