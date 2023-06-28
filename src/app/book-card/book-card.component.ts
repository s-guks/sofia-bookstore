import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {

  panelOpenState = false;

  @Input() book: Book = {
    title: "",
    author: "",
    cover: "",
    desc: "",
    bio: "",
    buy: ""
    }; // decorate the property with @Input()

    constructor() {
      
    }

    ngOnInit(): void {
      //console.log(this.book);
    }

    //drop(event: CdkDragDrop<string[]>) {
    //  moveItemInArray(this.books, event.previousIndex, event.currentIndex);
    //}

}
