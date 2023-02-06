// #1 install and import Axios
import React, { useEffect, useState } from "react";
import axios from "axios";
import List from "./List";
import AddName from "./AddName";
import PartyVip from "./PartyVip";

const ListContainer = () => {
  let guestVIPS = ["Rick Sanchez", "Morty Smith", "Summer Smith", "Mr. Nimbus"];

  const [guests, setGuests] = useState(guestVIPS);
  // #4 create state for characters
  const [characters, setCharacters] = useState([]);

  // #2 create useEffect to fetch characters
  useEffect(() => {
    const fetchData = async () => {
      const results = await axios.get(
        "https://rickandmortyapi.com/api/character?count=20"
      );
      // #3 log results to see in console. Then comment out
      // console.log("results", results.data);
      setCharacters(results.data.results);
      console.log("results", results.data.results); // run to SHOW ERROR! No dependency present.
    };

    fetchData();

    // });
  }, []); // #4 Correct the infinity loop by passing an empty dependency.

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
      <div>
        <h3>Top 20 VIPS</h3>
      </div>
      {/* #7 add some styling! */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        {/* #6 Create PartyVips comp and map over characters to pass as props */}
        {characters &&
          characters.map((character) => (
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
