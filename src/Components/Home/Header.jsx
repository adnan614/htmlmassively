import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header id="header">
        <NavLink exact to="/" className="logo">
          Massively
        </NavLink>
      </header>
    </>
  );
};

export default Header;
