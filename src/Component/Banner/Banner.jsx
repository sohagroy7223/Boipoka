import React from "react";
import bookImage from "../../assets/books.jpg";
const Banner = () => {
  return (
    <div className="flex justify-around border-2 bg-gray-200 rounded-2xl gap-2 mt-3">
      <div className="text-center flex flex-col  w-full justify-center">
        <h2 className="text-4xl font-bold text-black">
          Books to freshen up your bookshelf
        </h2>
        <button className="btn border-none w-30 mx-auto mt-3 text-center bg-[#23BE0A]">
          View The List
        </button>
      </div>
      <img className="w-3/6 rounded-2xl" src={bookImage} alt="" />
    </div>
  );
};

export default Banner;
