// #1 COPY ExampleComponent DELETE ALL useEffects
import React, { useEffect, useState } from "react";

function Timer() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState(false);

  // #2 Create useEffect for setTimeout
  //   useEffect(() => {
  //     setTimeout(() => {
  //       alert("hello");
  //     }, 5000);
  //   });

  // #3 setup state in App component. Finish steps in App.js

  // #4 Fix the Timer component
  //   useEffect(() => {
  //     // #6 assign timer to variable
  //     const compTimer = setTimeout(() => {
  //       alert("hello");
  //     }, 5000);

  //     // #7 use clearTimeout to call timer variable
  //     return () => clearTimeout(compTimer);
  //   });

  // #8 Explain the clearTimeout
  useEffect(() => {
    console.log(`useEffect count: ${count}`);

    return () => console.log(`clean up count: ${count}`);
  }, [count]); // only run when account changes
  // The clean up is "cleaning up" the state after the component gets rendered.

  // #9 CLEAR OUT ADDED CODE IN APP.JS

  return (
    <div>
      <h1>Timer Component</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <button onClick={() => setUser((u) => !user)}>Toggle User</button>
    </div>
  );
}

export default Timer;
