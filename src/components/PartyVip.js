import React from "react";

// #1 destructure props: name, image
const PartyVip = ({ name, image }) => {
  // #2 console.log the props to see result, then comment out
  console.log("name", name);
  return <div>PartyVip</div>;
};

export default PartyVip;
