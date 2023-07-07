import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../book';
import { Observable, of } from 'rxjs';
import { BooksService } from '../services/books.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit{

  //books$: Observable<Book[]> = of();

  currentBook: Book = {
    isbn: "",
    title: "",
    author: "",
    cover: "",
    desc: "",
    bio: "",
    buy: "",
    tag1: "",
    tag2: "",
    tag3: ""
  };

  i: number = 0;
  
  constructor(private router: Router, private booksService: BooksService, private route: ActivatedRoute) { 
    
   }
 
  //queryString = window.location.search;
  //urlParams = new URLSearchParams(this.queryString);
  //isbn: string = "";

  isbn: string = this.route.snapshot.paramMap.get('isbn')!;

  
  readSingleBook(): Observable<Book | undefined> {
    //console.log(isbn);
    return this.booksService.readBook(this.isbn);
  }
  
  
  ngOnInit(): void {
    //this.currentBook = this.readSingleBook(this.isbn);
    // = this.booksService.readBook(this.isbn);
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
