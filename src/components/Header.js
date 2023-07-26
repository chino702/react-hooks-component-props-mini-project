import React from "react";

const Header = ({ name }) => {
  return (
    <header>
      <h1>{name}</h1>
      <p>About</p>
    </header>
  );
};

export default Header;