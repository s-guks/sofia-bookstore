import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Book } from '../book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private afs: AngularFirestore) 
  {

  }

  storeBook(): void {
    this.afs.doc<Book>("books/Tolkien").set({
      title: "The Hobbit",
        author: "J. R. R. Tolkien",
        cover: "assets/bookcover3.jpeg",
        desc: "Bilbo Baggins is a hobbit who enjoys a comfortable, unambitious life, rarely traveling any farther than his pantry or cellar. But his contentment is disturbed when the wizard Gandalf and a company of dwarves arrive on his doorstep one day to whisk him away on an adventure. They have launched a plot to raid the treasure hoard guarded by Smaug the Magnificent, a large and very dangerous dragon. Bilbo reluctantly joins their quest, unaware that on his journey to the Lonely Mountain he will encounter both a magic ring and a frightening creature known as Gollum.",
        bio: "https://www.tolkiensociety.org/",
        buy: "https://www.amazon.com/Hobbit-J-R-Tolkien/dp/054792822X"
    })
  }

}
