import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../book';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {

  panelOpenState = false;

  @Input() book: Book = {
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
    }; // decorate the property with @Input()

    constructor(private router: Router) {
      
    }

    onReadMore(book: any) {
      this.router.navigate(["book", book.isbn]);
    }

    /* 
    onAvailableClick(room: any) {
      this.router.navigate(['room', room.id, this.date, this.startValue.toString(), this.endValue.toString()]);
    }
    */

    ngOnInit(): void {
      //console.log(this.book);
    }

}
