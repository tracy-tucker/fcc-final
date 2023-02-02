import React, { useState } from "react";

const AddName = ({ onSubmitHandler }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInput = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  function resetInput() {
    setInputValue("");
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name..."
        value={inputValue}
        onChange={(e) => handleInput(e)}
      />
      <button onClick={(e) => onSubmitHandler(e, inputValue, resetInput)}>
        Add Name
      </button>
    </div>
  );
};

export default AddName;
