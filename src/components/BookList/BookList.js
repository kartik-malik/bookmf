import classes from "./BookList.module.css";
import React, { useEffect, useState } from "react";
import BookCard from "../BookCard/BookCard";

const StartingPageContent = ({ books }) => {
  // console.log(ads);

  return (
    <>
      <section className={`${classes.adcontainer}`}>
        {books.map((book) => {
          return (
            <BookCard
              key={book._id}
              title={book.title}
              id={book._id}
              imageUrl={book.imageUrl}
            />
          );
        })}
      </section>
    </>
  );
};

export default StartingPageContent;
