import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BOOKS } from '../mock-books';
//import {CdkDragDrop, CdkDropList, CdkDrag, moveItemInArray} from '@angular/cdk/drag-drop';
import { BooksService } from '../services/books.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.scss']
})
export class AllBooksComponent implements OnInit{
    
    //books = BOOKS;
    books$: Observable<Book[]> = of();

    constructor(private booksService: BooksService) {
      
    }

    ngOnInit(): void {
      this.books$ = this.booksService.readBooks();
    }

}
