// import React, { use } from "react";
import { FaStar } from "react-icons/fa";

const Book = ({ book }) => {
  //   const data = use(booksPromise);
  //   console.log(data);
  //   console.log(book);
  console.log(book);
  return (
    <div className="bg-white border-2 mx-auto m-1 p-4 rounded-2xl mt-10">
      <div className="bg-[#F3F3F3] flex justify-center items-center w-81.5 h-57.5 mt-2">
        <img
          className="w-33.5 h-34 mx-auto rounded-2xl bg-cover"
          src={book.image}
          alt=""
        />
      </div>
      <div>
        <div className="flex text-[#23BE0A] mt-3">
          <p className="bg-gray-100 p-2 rounded-2xl">Young Adult</p>
          <p className="bg-gray-100 p-2 rounded-2xl ml-3">Identity</p>
        </div>
        <h3 className="text-black text-2xl mt-4 font-bold">{book.bookName}</h3>
        <p className="text-gray-700 mt-4 ">by: {book.author}</p>
        <div className="flex gap-11 mt-4 justify-between">
          <p className="text-gray-600">Fiction</p>
          <div className="flex items-center gap-1.5 ">
            <p className="text-gray-600">{book.rating}</p>
            <FaStar className="text-gray-400" size={17} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
