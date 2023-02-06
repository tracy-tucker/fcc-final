import React from "react";

const List = ({ name, number }) => {
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
