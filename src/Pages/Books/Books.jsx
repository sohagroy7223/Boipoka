// import React, { useEffect, useState } from "react";
import { Suspense } from "react";
import Book from "../Book/Book";

const Books = ({ bookData }) => {
  // console.log(bookData);
  // 1st away to fetch and get data form API ************

  //   const [allBooks, setAllBooks] = useState([]);

  //   useEffect(() => {
  //     fetch("booksData.json")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setAllBooks(data);
  //       });
  //   }, []);
  //   console.log(allBooks);

  // 2nd away to get data from API**************

  //   const booksPromise = fetch("./booksData.json").then((res) => res.json());

  return (
    <div>
      <h2 className="text-3xl font-bold text-center mt-10">books</h2>
      {/* 1st away **********************/}
      {/* {allBooks.map((book) => (
        <Book book={book}></Book>
      ))} */}

      {/* 2nd away ********************* */}
      {/* <Suspense fallback={<span>Loading...</span>}>
        <Book booksPromise={booksPromise}></Book>
      </Suspense> */}

      {/* 3rd away to get data */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full mx-auto mt-10">
        {bookData.map((book) => (
          <Book key={book.bookId} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
