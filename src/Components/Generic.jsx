import React from "react";
import { NavLink } from "react-router-dom";
import NavDataRouter from "./Home/NavDataRouter";
import NavRouter from "./Home/NavRouter";
import NavDataLink from "./Home/NavDataLink";
import NavSocial from "./Home/NavSocial";
import Main from "./Generic/Main";
import Footer from "./Home/Footer/Footer";
import Copyright from "./Copyright";
import NavSocialMap from "./Element/NavSocialMap";
const Generic = () => {
  return (
    <>
      <div id="wrapper">
        <header id="header">
          <NavLink to="/" className="logo">
            Massively
          </NavLink>
        </header>

        <nav id="nav">
          <ul className="links">
            {NavDataRouter.map((element, index) => {
              const { to, title } = element;

              return <NavRouter to={to} title={title} />;
            })}
          </ul>
          <NavSocialMap />
        </nav>

        <Main />
        <Footer />

       <Copyright />
      </div>
    </>
  );
};

export default Generic;
