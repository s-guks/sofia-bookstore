import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Book } from '../book';
import { Observable } from 'rxjs';
import { BookDetailService } from '../services/book-detail.service';


@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit{

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
  
  constructor(private bookDetailService: BookDetailService, private afs: AngularFirestore) { 
    //this.thisbook = this.bookDetailService.readBook();
   }
 
  queryString = window.location.search;
  urlParams = new URLSearchParams(this.queryString);
  isbn = this.urlParams.get('isbn');

   ngOnInit(): void {
    //this.book = this.bookDetailService.readBook(this.isbn);
  }

  readBook() {
    this.bookDetailService.readBook(this.isbn);
    }

  /*
  onBookClick(room: any) {
    this.router.navigate(['confirm-booking-room', room.id, this.date, this.startValue.toString(), this.endValue.toString()]);
  }
  */
}
