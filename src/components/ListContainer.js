import React, { useState } from "react";
import List from "./List";
import AddName from "./AddName";

const ListContainer = () => {
  let guestVIPS = ["Rick Sanchez", "Morty Smith", "Summer Smith", "Mr. Nimbus"];

  const [guests, setGuests] = useState(guestVIPS);

  const handlSubmit = (e, inputValue, resetInput) => {
    e.preventDefault();
    setGuests([...guests, inputValue]);
    resetInput();
  };

  return (
    <div className="list-container">
      <div>
        <h1 className="header">Rick and Morty Party List</h1>
      </div>
      <div>
        <AddName onSubmitHandler={handlSubmit} />
      </div>
      <div>
        <h3>List of those attending</h3>
        {guests.map((guest, index) => (
          <List key={index} name={guest} number={index} />
        ))}
      </div>
    </div>
  );
};

export default ListContainer;
