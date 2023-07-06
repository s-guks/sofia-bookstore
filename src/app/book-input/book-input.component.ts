import { Component, OnChanges } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { BooksService } from '../services/books.service';
import { Book } from '../book';
import { BOOKS } from '../mock-books';

@Component({
  selector: 'app-book-input',
  templateUrl: './book-input.component.html',
  styleUrls: ['./book-input.component.scss']
})
export class BookInputComponent implements OnChanges{

  ISBN: string = "";
  newBook: Book = {
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

  constructor (private booksService: BooksService)
  { 
    
  }

  storeBook() {
    this.booksService.storeBook(this.ISBN, this.newBook);
  }

  ngOnChanges() {

  }

}
