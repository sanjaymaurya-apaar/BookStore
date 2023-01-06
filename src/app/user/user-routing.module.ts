import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'user/add-book', component: AddBookComponent },
  { path: 'user/delete-book', component: DeleteBookComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
