// #1 import useEffect
import React, { useEffect, useState } from "react";

// #4 add useState for count example
function ExampleComponent() {
  const [count, setCount] = useState(0);
  // #7 set boolean state for logged-in user
  const [user, setUser] = useState(false);

  // #2 build the useEffect skeleton
  useEffect(() => {
    // #3.a run a log to show every time useEffect renders
    console.log("useEffect hook rendered");
    // #6 update document title on render
    document.title = `${count}`;
    // #9 Add dependency to stop unnecassary useEffect renders!
    //   }); // renders every time components renders
    //   }, []); // only renders on initial load.
  }, [count]); // only renders when count changes! empty [] dependency will
  // SIDE NOTE: You can add as many dependencies that you want to control when the
  // useEffect renders.

  // #10 new useEffect to set localStorage
  useEffect(() => {
    console.log("user changed", user);
    localStorage.setItem("user", user); // setItem(key, value), look at Application
  }, [user]);

  // #3.b run a log to show ever time components renders
  console.log("component rendered");
  return (
    <div>
      <h1>Example Component</h1>
      {/* #5 render the count and add button */}
      <h2>{count}</h2>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      {/* #8 create button to toggle user, why is useEffect running unnecassarily?? */}
      <button onClick={() => setUser((u) => !user)}>Toggle User</button>
    </div>
  );
}

export default ExampleComponent;

// SIDE NOTE: useEffect renders twice on initial render when StrictMode is on.
// React run setup and cleanup one extra time before the actual setup.
// It's a stress-test to verify your Effect logic is implemented correctly.
