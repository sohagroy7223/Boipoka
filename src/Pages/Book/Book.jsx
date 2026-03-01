import React, { use } from "react";

const Book = ({ book }) => {
  //   const data = use(booksPromise);
  //   console.log(data);
  //   console.log(book);
  console.log(book);
  return (
    <div>
      <h2>book name: {book.bookName} </h2>
    </div>
  );
};

export default Book;
