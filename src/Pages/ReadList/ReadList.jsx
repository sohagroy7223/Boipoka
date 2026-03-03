import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getBookFromStored } from "../../Utility/AddToLS";
import Book from "../Book/Book";

const ReadList = () => {
  const [readList, setReadList] = useState([]);

  const data = useLoaderData();

  useEffect(() => {
    const storeBook = getBookFromStored();
    const convertedStorBook = storeBook.map((id) => parseInt(id));
    const myListBook = data.filter((book) =>
      convertedStorBook.includes(book.bookId),
    );

    setReadList(myListBook);
  }, [data]);

  return (
    <div>
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-4">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Read book"
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
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
        <div className="tab-content bg-base-100 border-base-300 p-6">
          Wishlist Books
        </div>
      </div>
    </div>
  );
};

export default ReadList;
