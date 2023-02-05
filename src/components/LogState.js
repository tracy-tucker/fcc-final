import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  // #1 Why doesn't this work?
  //   function handleClick() {
  //     setCount(count + 1);
  //     setCount(count + 1);
  //     setCount(count + 1);
  //   }

  // Calling the set function does not change the current state in the already-executing code.
  // It only affects what useState will return starting from the NEXT render.

  // KEY TAKEAWAY: Treat the object you put into state as a ready-only.

  // How to update based on a previous state:
  // #2 use an updater function: this takes a pending state to calculate the next state

  function handleClick() {
    setCount((prevState) => prevState + 1);
    setCount((c) => c + 1);
    setCount((c) => c + 1);
  }

  return (
    <div style={{ margin: "20px" }}>
      <button
        onClick={() => {
          handleClick();
        }}
      >
        Add
      </button>
      <p>You added {count} time(s)</p>
      <p>I need to increment by 3's</p>
    </div>
  );
};

export default Counter;
