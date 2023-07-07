import { Component, OnChanges, OnInit } from '@angular/core';

import { BooksService } from '../services/books.service';
import { Book } from '../book';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-sort-filter',
  templateUrl: './sort-filter.component.html',
  styleUrls: ['./sort-filter.component.scss']
})
export class SortFilterComponent implements OnInit{

  books$: Observable<Book[]> = of();

    constructor(private booksService: BooksService) {
      
    }

  Genre: string[] = [];
  Tone: string[] = [];
  i: number = 0;
  search: string = "";
  numBooks: number = 0;
  
  ngOnInit(): void {
    this.books$ = this.booksService.readBooks();
  }

  addABook(): void {
    this.numBooks++;
  }

  getNumBooks(): boolean {
    return this.numBooks == 0;
  }

  tags(book: Book): boolean {
    for (this.i=0; this.i<this.Genre.length; this.i++) {
      if (book.tag1 != this.Genre[this.i] && book.tag2 != this.Genre[this.i]) {
        return false;
      }
    }
    for (this.i=0; this.i<this.Tone.length; this.i++) {
      if (book.tag2 != this.Tone[this.i] && book.tag3 != this.Tone[this.i]) {
        return false;
      }
    }
    return true;
  }

    searchTOrA(book: Book): boolean {
      if(book.title.toUpperCase().match(this.search.toUpperCase()) || book.author.toUpperCase().match(this.search.toUpperCase())) {
        return true;
      }
      else
        return false;
    }

}
