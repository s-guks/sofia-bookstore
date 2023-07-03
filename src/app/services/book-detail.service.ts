import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, DocumentSnapshot } from '@angular/fire/compat/firestore';
import { doc, getDoc, collection, query, where } from "firebase/firestore";
import { Book } from '../book';
import { Observable } from 'rxjs';

@Injectable({   
  providedIn: 'root'
})
export class BookDetailService {

  constructor(private afs: AngularFirestore) { 
    
  }

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

  /*isbn: string = "";

  async readBook(isbn: string): Promise<AngularFirestoreDocument<Book>> {
    const book = await this.afs.collection<Book>('books').doc(isbn);
    //const book = (await docRef.get());
    
    //this.afs.collection<Book>("books");
    return book;
  }
  */

  readBook(thisIsbn: string): Book {
    
    //const bookDetail = this.afs.collection<Book>("books", (ref)=>ref.where("isbn", "==", thisIsbn)).get();
        //.subscribe(data=>data.forEach(el=>console.log(el.data())));
    //const q = query(bookDetail, where("isbn", "==", thisIsbn));
    
    
    
    this.book.isbn = thisIsbn;

    
    return (this.afs.firestore.doc(`books/${thisIsbn}`).get())
    



    //this.book.title = bookDetail.title;
    
    
    
    /*this.book.author =  this.afs.collection<Book>("books").doc(`isbn/author`);
    this.book.cover =  
    this.book.desc =  this.afs.collection<Book>("books").doc(isbn).get("title");
    this.book.bio =  this.afs.collection<Book>("books").doc(isbn).get("title");
    this.book.buy =  this.afs.collection<Book>("books").doc(isbn).get("title");
    this.book.tag1 =  this.afs.collection<Book>("books").doc(isbn).get("title");
    this.book.tag2 =  this.afs.collection<Book>("books").doc(isbn).get("title");
    this.book.tag3 =  this.afs.collection<Book>("books").doc(isbn).get("title");
    */
    //return this.book;
  } 
}
