import React, { useState, useEffect } from "react";
import List from "./List";
import AddName from "./AddName";
import PartyVip from "./PartyVip";

// useEffect - allows you to perform side effects in your component
// IE: fetching data, directly updating the DOM, timers, event listeners, etc.
// It accepts 2 arguments: function (required) and dependency (optional)
// No dependency: useEffect runs on every render
// [] dependency: useEffect runs only on first render
// [] with value dependency: useEffect runs on inital render and when that value changes
// Effect cleanup - some effects require cleanup to reduce memory leaks
// IE: timeouts, subscriptions, event listeners, etc.

// #1 import useEffect

const ListContainer = () => {
  let guestVIPS = ["Rick Sanchez", "Morty Smith", "Summer Smith", "Mr. Nimbus"];

  const [guests, setGuests] = useState(guestVIPS);
  // #2 create a new useState for characters
  const [characters, setCharacters] = useState("");

  const handlSubmit = (e, inputValue, resetInput) => {
    e.preventDefault();
    setGuests([...guests, inputValue]);
    resetInput();
  };

  // #3 create useEffect function
  // useEffect(() => {}) or useEffect(() => {}, [])
  useEffect(() => {
    // #4 create the fetch
    // #5 console.log the response, then comment out the log
    // replace the log with setCharactors(data.results)
    fetch("https://rickandmortyapi.com/api/character?count=20")
      .then((resp) => resp.json())
      //   .then((data) => console.log(data.results));
      .then((data) => setCharacters(data.results));
  }, []); // empty array so that data only loads on initial load

  // #7 create the PartyVip component and import it in

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
      {/* #8 Add PartyVip here. */}
      {/* #9 map over characters and pass name and image as props */}
      <div>
        {characters.map((character) => (
          <PartyVip
            key={character.id}
            name={character.name}
            image={character.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ListContainer;
