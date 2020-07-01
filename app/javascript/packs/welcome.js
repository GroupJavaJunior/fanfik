import React from "react";
import ReactDOM from "react-dom";
import Products from "../components/Products/Products";

const Welcome = (props) => {
  return (
    <div>
      <Products />
    </div>
  );
};

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Welcome />, document.getElementById("welcome"));
});
