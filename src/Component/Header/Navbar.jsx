import React from "react";

const Navbar = () => {
  return (
    <div className="bg-blue-400 p-6">
      <nav className=" flex justify-between w-11/12 mx-auto">
        {/* logo */}
        <h3 className="font-bold text-2xl">Book Vibe</h3>
        <div className="flex gap-4 text-xl ">
          <ul>Home</ul>
          <ul>Listed Books</ul>
          <ul>Pages to Read</ul>
        </div>
        <div>
          <button>sign in</button>
          <button>sign up</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
