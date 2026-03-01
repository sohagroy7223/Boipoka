import React from "react";
import bookImage from "../../assets/books.jpg";
const Banner = () => {
  return (
    <div className="flex">
      <div>
        <h2>Books to freshen up your bookshelf</h2>
        <button className="btn">View The List</button>
      </div>
      <img src={bookImage} alt="" />
    </div>
  );
};

export default Banner;
