import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BOOKS } from '../mock-books';
import {CdkDragDrop, CdkDropList, CdkDrag, moveItemInArray} from '@angular/cdk/drag-drop';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent{

    books = BOOKS;

    constructor(private booksService: BooksService) {
      
    }

    drop(event: CdkDragDrop<string[]>) {
      moveItemInArray(this.books, event.previousIndex, event.currentIndex);
    }
    storeTolkien() {
      this.booksService.storeBook();
    }
}
