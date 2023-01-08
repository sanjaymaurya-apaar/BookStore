import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { AllBooksComponent } from './components/all-books/all-books.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';

const routes: Route[] = [
  { path: '', component: AllBooksComponent },
  { path: ':id', component: BookDetailComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
