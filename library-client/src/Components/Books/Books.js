import React from "react";
import { book } from "../../data/booksData";

const Books = () => {
  return (
    <div>
      <p className="text-4xl text-center">Best Selling Books</p>
      {book.map((buk) => {
        return (
          <div className="flex  ">
            <div key={buk.id} className="shadow-xl rounded-md px-6">
              <img
                src={buk.image_url}
                alt="book"
                className="h-[250px] w-[200px]"
              />
              <p> Title :{buk.title}</p>
              <span> Author : {buk.author}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Books;
