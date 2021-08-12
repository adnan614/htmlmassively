import React from "react";
import { NavLink } from "react-router-dom";

const NavRouter = ({ to, title }) => {
  return (
    <>
      
        <li className="active">
          <NavLink activeClassName exact to={to}>
            {title}
          </NavLink>
        </li>
    </>
  );
};

export default NavRouter;
