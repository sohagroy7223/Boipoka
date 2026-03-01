// import React, { use } from "react";

const Book = ({ book }) => {
  //   const data = use(booksPromise);
  //   console.log(data);
  //   console.log(book);
  console.log(book);
  return (
    <div className="bg-white">
      <div className="bg-[#F3F3F3] flex justify-center items-center w-[326px] h-[230px] mt-2">
        <img
          className="w-[134px] h-[136px] mx-auto rounded-2xl bg-cover"
          src={book.image}
          alt=""
        />
      </div>
      <div>
        <div>
          <p>Young Adult</p>
          <p>Identity</p>
        </div>
      </div>
    </div>
  );
};

export default Book;
