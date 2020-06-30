import React, { useState } from "react";

const Counter = (props) => {
  const [count, setCount] = useState(props.count);

  const countUp = () => setCount((c) => c + 1);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={countUp}>Count Up</button>
    </div>
  );
};

export default Counter;
