import React from "react";
import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const data = useLoaderData();
  const booksData = data.find((book) => book.bookId === bookId);
  const {
    image,
    bookName,
    author,
    category,
    review,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
  } = booksData;
  return (
    <div className="md:flex justify-center border bg-white text-black p-6 gap-4 w-full ">
      <div className="p-10 bg-gray-200 rounded-2xl">
        <img className="w-96" src={image} alt="book image" />
      </div>
      <div className="w-[540px]  p-4 ">
        <h2 className="text-3xl font-bold">{bookName}</h2>
        <p className="text-lg font-medium text-gray-600 mt-2">by: {author}</p>
        <p className="border text-gray-300 mt-2"></p>

        <h4 className="text-lg font-medium text-gray-600 mt-2">{category}</h4>

        <p className="border text-gray-300 mt-2"></p>

        <p className="mt-2">
          <b>Review</b>
          {review}
        </p>
        <div className="flex gap-3 mt-2 ">
          <b>tag</b>
          <div className="flex gap-4 text-green-500">
            {tags.map((tag, index) => (
              <p className=" rounded-2xl p-1 bg-gray-100" key={index}>
                #{tag}
              </p>
            ))}
          </div>
        </div>
        <p className="border text-gray-300 mt-3"></p>
        <p className="flex gap-10 mt-2 text-gray-600">
          Number of pages : <b className="text-black">{totalPages}</b>
        </p>
        <p className="flex gap-24 mt-2 text-gray-600">
          Publisher : <b className="text-black">{publisher}</b>
        </p>
        <p className="flex gap-10 mt-2 text-gray-600">
          Year of Publishing : <b className="text-black">{yearOfPublishing}</b>
        </p>
        <p className="flex gap-10 mt-2 text-gray-600">
          Rating : <b className="text-black">{rating}</b>
        </p>

        <div className="mt-5">
          <button className="btn btn-soft btn-accent mr-3">Accent</button>
          <button className="btn btn-soft btn-info">Info</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
