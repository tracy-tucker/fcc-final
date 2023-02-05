// #1 import useState
import { useState } from "react";
import "./App.css";
import ExampleComponent from "./components/ExampleComponent";
import Timer from "./components/Timer";

function App() {
  // #2 Add state to toggle the Timer component
  const [showComponent, setShowComponent] = useState(true);
  return (
    <div className="App">
      {/* <ExampleComponent /> */}

      {/* #3 Add a condition to only show timer component when state is true */}
      {showComponent && <Timer />}
      <button onClick={() => setShowComponent(!showComponent)}>
        Toggle Timer Component
      </button>
    </div>
  );
}

export default App;
// #4 Show timer component error! Toggle does not work, why?
// #5 Go back to Timer Component to fix this!
