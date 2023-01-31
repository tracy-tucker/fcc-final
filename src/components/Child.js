import React from "react";

const Child = ({ phrase }) => {
  // #1 Give this child some color! To separate between parent and child
  // #2 console.log the props
  //   console.log(props);
  // #3 Render the prop
  // #4 Destructure the prop!
  //   console.log(phrase);
  return (
    <div style={{ backgroundColor: "blue", color: "white" }}>
      <h2>Child component</h2>
      <p>{phrase}</p>
    </div>
  );
};

export default Child;
