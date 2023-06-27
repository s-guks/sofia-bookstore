import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BooksService } from '../services/books.service';
import { Book } from '../book';
import { BOOKS } from '../mock-books';

@Component({
  selector: 'app-book-input',
  templateUrl: './book-input.component.html',
  styleUrls: ['./book-input.component.scss']
})
export class BookInputComponent {

  ISBN: string = "";
  newBook: Book = {
    title: "",
    author: "",
    cover: "",
    desc: "",
    bio: "",
    buy: ""
};

  constructor (private booksService: BooksService)
  { 
    
  }
  

  storeBook() {
    this.booksService.storeBook(this.ISBN, this.newBook);
  }


}
