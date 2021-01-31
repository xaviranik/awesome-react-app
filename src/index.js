import React from "react";
import ReactDom from "react-dom";

// Styling
import "./index.css";

const Booklist = () => {
  return (
    <>
      <Book />
    </>
  );
};

const author = "Barrack Obama";

const Book = () => {
  const title = "A Promised Land";

  return (
    <article className="book">
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/41L5qgUW2fL._SX327_BO1,204,203,200_.jpg"
        alt="img"
      />
      <h1>{title.toUpperCase()}</h1>
      <h3>{author}</h3>
    </article>
  );
};

ReactDom.render(<Booklist />, document.getElementById("root"));
