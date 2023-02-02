import React, { useState } from "react";

const AddName = ({ onSubmitHandler }) => {
  // #3  trigger the bucket for testing, then comment out
  //   onSubmitHandler();
  // #4 add state to create a controlled input
  const [inputValue, setInputValue] = useState("");
  console.log("inputValue", inputValue);

  // #5 Create a function to handle the input value
  const handleInput = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  // #8 create reset message to send to parent
  // resetting inputValue back to an empty string
  function resetInput() {
    setInputValue("");
  }

  return (
    <div>
      {/* #1 Create input field and button */}
      {/* #2 go import into ListContainer to view result */}
      {/* #6 finish building the form: add value and onChange */}
      <input
        type="text"
        placeholder="Enter your name..."
        value={inputValue}
        onChange={(e) => handleInput(e)}
      />
      {/* #7 send over the inputValue to the via the onSubmitHandler */}
      <button onClick={(e) => onSubmitHandler(e, inputValue, resetInput)}>
        Add Name
      </button>
    </div>
  );
};

export default AddName;
