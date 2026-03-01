import React from "react";
import bookImage from "../../assets/books.jpg";
const Banner = () => {
  return (
    <div className="md:flex justify-around border-2 bg-gray-200 rounded-2xl gap-2 mt-10">
      <div className="text-center flex flex-col mt-5 w-full justify-center">
        <h2 className="text-4xl font-bold text-black">
          Books to freshen up your bookshelf
        </h2>
        <button className="btn border-none w-30 mx-auto mt-3  bg-[#23BE0A]">
          View The List
        </button>
      </div>
      <img
        className="md:w-3/6 mx-auto rounded-2xl mt-10 md:mt-0"
        src={bookImage}
        alt=""
      />
    </div>
  );
};

export default Banner;
