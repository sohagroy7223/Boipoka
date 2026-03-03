import React from "react";
import Banner from "../../Component/Banner/Banner";
import Books from "../Books/Books";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const bookData = useLoaderData();
  // console.log(bookData);
  return (
    <div>
      <Banner></Banner>
      <Books bookData={bookData}></Books>
    </div>
  );
};

export default Home;
