import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent {

  @Input() book = {
    title: "",
    author: "",
    cover: "",
    desc: "",
    bio: "",
    buy: ""
    }; // decorate the property with @Input()

    //drop(event: CdkDragDrop<string[]>) {
    //  moveItemInArray(this.books, event.previousIndex, event.currentIndex);
    //}

}
