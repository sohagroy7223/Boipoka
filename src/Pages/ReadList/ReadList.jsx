import React from "react";
import { useLoaderData } from "react-router";

const ReadList = () => {
  const data = useLoaderData();
  console.log(data);

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
          read book
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
