import React from "react";

const NavSocial = ({ name, icon }) => {
  return (
    <>
      <li>
        <a href="#" className={icon}>
          <span className="label">{name}</span>
        </a>
      </li>
    </>
  );
};

export default NavSocial;
