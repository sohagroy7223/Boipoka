import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getBookFromStored } from "../../Utility/AddToLS";
import Book from "../Book/Book";
import { getItemsFromLS } from "../../Utility/addWishBook";

const ReadList = () => {
  const [readList, setReadList] = useState([]);
  const [Wishlist, setWishList] = useState([]);

  const data = useLoaderData();

  useEffect(() => {
    const storeBook = getBookFromStored();
    const convertedStorBook = storeBook.map((id) => parseInt(id));
    const myListBook = data.filter((book) =>
      convertedStorBook.includes(book.bookId),
    );

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setReadList(myListBook);
  }, [data]);

  useEffect(() => {
    const storeBooks = getItemsFromLS();
    const convertedBooks = storeBooks.map((id) => parseInt(id));
    const myWishList = data.filter((books) =>
      convertedBooks.includes(books.bookId),
    );
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setWishList(myWishList);
  }, [data]);

  return (
    <div className="mt-3 bg-blue-900">
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-4 ">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Read book"
          defaultChecked
        />
        <div className="tab-content bg-gray-600  border-base-300 p-6">
          read book : {readList.length}
          <div className="grid lg:grid-cols-3 md:grid-cols-2">
            {readList.map((b) => (
              <Book key={b.bookId} book={b}></Book>
            ))}
          </div>
        </div>
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Wishlist Books"
        />
        <div className="tab-content bg-gray-600 border-base-300 p-6">
          Wishlist Books : {Wishlist.length}
          <div className="grid lg:grid-cols-3 md:grid-cols-2">
            {Wishlist.map((wishBook) => (
              <Book key={wishBook.bookId} book={wishBook}></Book>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadList;
