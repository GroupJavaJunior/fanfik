import React, { useState } from "react";
import ReactDOM from "react-dom";
import Counter from "../components/Counter";

const Welcome = (props) => {
  return (
    <div>
      <h1>Welcome from React</h1>
      <Counter count={5} />
    </div>
  );
};

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Welcome />, document.getElementById("welcome"));
});
