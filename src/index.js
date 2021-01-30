import React from "react";
import ReactDom from "react-dom";

// Styling
import "./index.css";

const Booklist = () => {
  return (
    <>
      <section>This is a booklist</section>
      <Book />
    </>
  );
};

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => {
  return (
    <img
      src="https://images-na.ssl-images-amazon.com/images/I/41L5qgUW2fL._SX327_BO1,204,203,200_.jpg"
      alt="img"
    />
  );
};

const Title = () => {
  return (
    <h2 style={{ color: "#617d98", fontSize: "2rem" }}>A Promised Land</h2>
  );
};

const Author = () => {
  return <h3>Barrack Obama</h3>;
};

ReactDom.render(<Booklist />, document.getElementById("root"));
