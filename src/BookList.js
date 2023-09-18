import logo from './logo.svg';
import './App.css';
import React, {useState} from "react"
import Book from "./Book";
import {books} from "./Books"

function BookList() {
  const [book, setBook] = useState(books)

  // let removeBook = (id) => {
  //   let newBook = books.filter((book) => book.id !== id)
  //   setBook(newBook)
  // }

  return (
   <section className="booklist">
   {books.map((book) => {
    return (
      <Book key={book.id} book={book} ></Book>
    )
})}
   </section>
  );
}

export default BookList;
