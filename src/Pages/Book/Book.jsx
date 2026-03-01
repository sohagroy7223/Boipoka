// import React, { use } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const Book = ({ book }) => {
  const { image, bookId, bookName, author, rating, tags } = book;
  //   const data = use(booksPromise);
  //   console.log(data);
  //   console.log(book);
  //   console.log(book);
  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="bg-white border-2 mx-auto m-1 p-4 rounded-2xl ">
        <div className="bg-[#F3F3F3] flex justify-center rounded-2xl items-center w-81.5 h-57.5 mt-2">
          <img className="w-33.5 h-34 mx-auto  bg-cover" src={image} alt="" />
        </div>
        <div>
          <div className="flex text-[#23BE0A] gap-9 ">
            {tags.map((tag) => (
              <p>{tag}</p>
            ))}
          </div>
          <h3 className="text-black text-2xl mt-4 font-bold">{bookName}</h3>
          <p className="text-gray-700 mt-4 ">by: {author}</p>
          <p className="border-2 border-dashed text-gray-300 mt-5"></p>
          <div className="flex gap-11 mt-4 justify-between">
            <p className="text-gray-600">Fiction</p>
            <div className="flex items-center gap-1.5 ">
              <p className="text-gray-600">{rating}</p>
              <FaStar className="text-gray-400" size={17} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
