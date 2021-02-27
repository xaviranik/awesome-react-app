import React from "react";
import ReactDom from "react-dom";

// Styling
import "./index.css";

// Data
const books = [
  {
    id: 1,
    author: "Barrack Obama",
    title: "A Promised Land",
    img:
      "https://images-na.ssl-images-amazon.com/images/I/41L5qgUW2fL._SX327_BO1,204,203,200_.jpg",
  },
  {
    id: 2,
    author: "Simon Sinek",
    title: "Together Is Better",
    img:
      "https://images-na.ssl-images-amazon.com/images/I/51ye21lNSaL._SY366_BO1,204,203,200_.jpg",
  },
];

const Booklist = () => {
  return (
    <>
      {books.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </>
  );
};

const Book = (props) => {
  // attribute, eventHandler
  // onClick, onMouseHover

  const clickHandler = (author) => {
    alert("Hello User: " + author);
  };

  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log("Title: ", props.title);
      }}
    >
      <img src={props.img} alt="img" />
      <h1>{props.title.toUpperCase()}</h1>
      <h3>{props.author}</h3>
      <button type="button" onClick={() => clickHandler(props.author)}>
        Add to cart
      </button>
    </article>
  );
};

ReactDom.render(<Booklist />, document.getElementById("root"));
