import React, { useState } from "react";
import List from "./List";

// function component === "stateless"

// RULES OF HOOKS:
// Only called within a function component
// Only called at the top level of that component
// Cannot be within a conditional

// ***** #1 --> import useState - Destructure the useState from react, as it is a named export

const ListContainer = () => {
  // ***** #3 --> Create an array guest list
  let guestVIPS = ["Rick Sanchez", "Morty Smith", "Summer Smith", "Mr. Nimbus"];

  // ***** #4 --> create useState
  // useState accepts an initial state and returns two values: -current state -function that updates state
  // const [state, setState] = useState(initialState)
  const [guests, setGuests] = useState(guestVIPS);
  // ***** #5 console.log the guests to see in console.
  console.log(guests);

  return (
    <div className="list-container">
      <div>
        <h1 className="header">Rick and Morty Party List</h1>
      </div>
      <div>
        <h3>List of those attending</h3>
        {/* ***** #6 map over the guests to retrieve name and number */}
        {/* pass over to List component as props */}
        {guests.map((guest, index) => (
          <List key={index} name={guest} number={index} />
        ))}
      </div>
    </div>
  );
};

export default ListContainer;
