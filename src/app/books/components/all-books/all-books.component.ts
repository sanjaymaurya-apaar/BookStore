import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.scss'],
  // providers:[BookService]
})
export class AllBooksComponent implements OnInit{

  constructor(private bookService:BookService){}

  ngOnInit(): void {
      console.log(this.bookService.getBooks())
  }

}
