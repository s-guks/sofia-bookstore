export interface Book {
    isbn: string,  
    title: string;
    author: string;
    cover: string;
    desc: string;
    bio: string;
    buy: string;
    tag1: string;
    tag2: string;
    tag3: string;
  }

export const emptyBook: Book = {
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
}