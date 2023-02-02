import React from "react";

const List = ({ name, number }) => {
  // ***** #1 log number to show count begins at ZERO
  console.log("number", number); // comment-out when done

  // ***** #2 Create number function to start count at 1.
  const newNumber = (number) => {
    return number + 1;
  };

  return (
    <div>
      <p>
        {newNumber(number)} - {name}
      </p>
    </div>
  );
};

export default List;
