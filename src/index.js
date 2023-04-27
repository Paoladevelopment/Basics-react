import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { books } from "./books";
import Book from "./Book";

//How to iterate over the array of books with the ability to returning a component for each and every item. Remember we have to return always a proper html element to render, objects are not validos.

/* A way to do that:
function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book img={book.img} title={book.author} author={book.title} />;
      })}
    </section>
  );
}

*/

//we have to set a unique key when we are working with list and iterating over it.
function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

ReactDOM.render(<BookList />, document.getElementById("root"));
