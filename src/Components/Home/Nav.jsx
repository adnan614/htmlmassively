import React from "react";
import NavRouter from "./NavRouter";
import NavData from "./NavDataRouter";
import Data from "./NavDataLink";
import NavSocial from "./NavSocial";
import NavSocialMap from "../Element/NavSocialMap";

const Nav = () => {
  return (
    <>
      <nav id="nav">
        <ul className="links">
          {NavData.map((element, index) => {
            const { to, title } = element;
            return <NavRouter to={to} title={title} />;
          })}
        </ul>
        <NavSocialMap />
      </nav>
      ;
    </>
  );
};

export default Nav;
