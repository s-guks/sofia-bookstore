import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Book } from '../book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private afs: AngularFirestore) 
  {

  }

  storeBook(isbn: string, book: Book): void {
    this.afs.doc<Book>(`books/${isbn}`).set({
        title: book.title,
        author: book.author,
        cover: book.cover,
        desc: book.desc,
        bio: book.bio,
        buy: book.buy
    })
  }

  readBooks(): Observable<Book[]> {
    return this.afs.collection<Book>("books").valueChanges();
  }
}
