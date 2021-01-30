import React from "react";
import ReactDom from "react-dom";

const Greeting = () => {
  return (
    <>
      <div className="test">Hello World</div>
      <h1>This is awesome!</h1>
    </>
  );
};

ReactDom.render(<Greeting />, document.getElementById("root"));
