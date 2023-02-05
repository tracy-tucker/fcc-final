import React from "react";

// #1 destructure props: name, image
const PartyVip = ({ name, image }) => {
  // #2 console.log the props to see result, then comment out
  // console.log("name", name);
  // #3
  return (
    <div>
      <img src={image} alt={name} />
      <p>{name}</p>
    </div>
  );
};

export default PartyVip;
