import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
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

  books$: Observable<Book[]> = of();

  book: Book = {
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
    //this.thisbook = this.bookDetailService.readBook();
   }
 
  //queryString = window.location.search;
  //urlParams = new URLSearchParams(this.queryString);
  isbn = this.route.snapshot.paramMap.get('isbn');

   ngOnInit(): void {
    this.books$ = this.booksService.readBooks();
  }

  correctBook(book: Book): boolean {
    if (this.isbn == book.isbn) {
      return true;
    }
    return false;
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
