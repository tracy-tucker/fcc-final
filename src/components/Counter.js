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
    // CORRECT WAY
    setCount((prevState) => prevState + 1);
    setCount((c) => c + 1);
    setCount((c) => c + 1);
  }

  // #3 Why is the log behind the count?
  function handleLog() {
    setCount(count + 1);
    console.log("state?", count);
  }

  // Because state behaves like a snapshot.
  // It will not log the new state in already running code

  // #4
  function handleLog() {
    setCount((prevState) => prevState + 1);
  }
  console.log("state?", count);

  return (
    <div style={{ margin: "20px" }}>
      {/* FIRST example */}
      <button
        onClick={() => {
          handleClick();
        }}
      >
        Add
      </button>
      <p>You added {count} time(s)</p>
      <p>I need to increment by 3's</p>
      {/* SECOND example */}
      <button
        onClick={() => {
          handleLog();
        }}
      >
        Log me
      </button>
    </div>
  );
};

export default Counter;
