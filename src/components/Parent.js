import React from "react";
import Child from "./Child";

// #A Using the VS Code extension, ES7+ React/Redux/React-Native snippets
// #B rafce --> creates a arrow function component export

// This component demonstrates props being passed down from a
// parent component to a child component.
const Parent = () => {
  // #1 create a variable
  let sentence = "Here's Johnny!";
  // #2 create some styling to differientiate parent from child
  // #3 The outer curly braces are for JSX.
  // The inner curly brace is for the style object.
  // #4 Be sure to import Parent within the App component.
  // #5 Create the HTML attribute to pass the sentence variable
  // over to the child component.
  return (
    <div style={{ border: "1px solid red" }}>
      <h1>Parent component</h1>
      <Child phrase={sentence} />
    </div>
  );
};

export default Parent;
