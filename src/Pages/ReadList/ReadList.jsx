import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getBookFromStored } from "../../Utility/AddToLS";

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
  }, []);

  return (
    <div>
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-lift">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Read book"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          read book : {readList.length}
        </div>
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Wishlist Books"
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          Wishlist Books
        </div>
      </div>
    </div>
  );
};

export default ReadList;
