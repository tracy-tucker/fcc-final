import React, { useState } from "react";
import List from "./List";
import AddName from "./AddName";

// #1 Create AddName comp (go there for more)
// #2 Import AddName!

const ListContainer = () => {
  let guestVIPS = ["Rick Sanchez", "Morty Smith", "Summer Smith", "Mr. Nimbus"];

  const [guests, setGuests] = useState(guestVIPS);

  // #5 Create the bucket!
  // #8 pass in e and inputValue
  // #10 pass in the resetInput function
  const handlSubmit = (e, inputValue, resetInput) => {
    // #6 log the bucket, then comment out, go back to the child!
    // console.log('Bucket!');
    e.preventDefault();
    // #9 log input to test, then comment out
    // console.log("new input", inputValue);
    // #10 setGuests: pass in old guests with new inputValue
    // go back to child to create reset function
    setGuests([...guests, inputValue]);
    // #11 trigger resetInput to reset the input value
    resetInput();
  };

  return (
    <div className="list-container">
      <div>
        <h1 className="header">Rick and Morty Party List</h1>
      </div>
      {/* #3 Add AddName here! */}
      {/* #4 Think about the bucket! */}
      <div>
        {/* #7 Send the bucket to the child - see child to continue! */}
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

// SIDE NOTE: When the user refreshes the browser, the state will be lost
// The only way to save state is via local storage,
// or using an extension, like Redux with redux-persist that will
// persist the state to storage.
// Or, persist state into local storage using useEffect

// SIDE NOTE: useState can only be called at the top level of your component.
// You can't call it inside loops or conditions.
