import React, { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    fetch("booksData.json")
      .then((res) => res.json())
      .then((data) => {
        setAllBooks(data);
      });
  }, []);
  console.log(allBooks);
  return (
    <div>
      <h2 className="text-3xl font-bold text-center mt-3.5">books</h2>
      {allBooks.map((book) => (
        <Book book={book}></Book>
      ))}
    </div>
  );
};

export default Books;
