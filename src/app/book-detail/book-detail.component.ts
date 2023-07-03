import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../book';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent {

  constructor(private router: Router) {
    
  }
  
  @Input() book: Book = {
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

  /*
  onBookClick(room: any) {
    this.router.navigate(['confirm-booking-room', room.id, this.date, this.startValue.toString(), this.endValue.toString()]);
  }
  */
}
