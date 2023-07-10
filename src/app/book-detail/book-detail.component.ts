import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../book';
import { Observable, defaultIfEmpty, filter, map, of } from 'rxjs';
import { BooksService } from '../services/books.service';
import { Router, ActivatedRoute } from '@angular/router';
import { emptyBook } from '../book';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit{

  currentBook: Observable<Book> = of(emptyBook);

  i: number = 0;
  isbn: string = this.route.snapshot.paramMap.get('isbn')!;
  
  constructor(private router: Router, private booksService: BooksService, private route: ActivatedRoute) { 
    
   }
 
  //queryString = window.location.search;
  //urlParams = new URLSearchParams(this.queryString);
  //isbn: string = "";
  
  ngOnInit(): void {
    this.fetchBookData()
    // = this.booksService.readBook(this.isbn);
  }

  fetchBookData(): void {
    this.currentBook = this.booksService.readBook(this.isbn).pipe(
      map(bookData => bookData != undefined ? bookData : emptyBook)
    )
  }

  correctBook(book: Book): boolean {
    if (this.isbn == book.isbn) {
      return true;
    }
    console.log(book.isbn); //this does not display anything
    console.log(this.isbn); //this displays the isbn  
    return false;           //for some reason this function runs 4 times
  }

  /*
  readBook() {
    this.bookDetailService.readBook(this.isbn);
    }
    */

  /*
  onBookClick(room: any) {
    this.router.navigate(['confirm-booking-room', room.id, this.date, this.startValue.toString(), this.endValue.toString()]);
  }
  */
}
