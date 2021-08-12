import React from "react";
import { NavLink } from "react-router-dom";
import ImageData from "./Element/ImageData";
import ImageElement from "./Element/ImageElement";
import NavDataRouter from "./Home/NavDataRouter";
import NavRouter from "./Home/NavRouter";
import NavDataLink from "./Home/NavDataLink";
import NavSocial from "./Home/NavSocial";
import Copyright from "./Copyright";
import Footer from "./Home/Section/Footer";
import Main from "./Element/Main";
import NavSocialMap from "./Element/NavSocialMap";

const Elements = () => {
  return (
    <>
      <div id="wrapper">
        <header id="header">
          <NavLink exact to="/" class="logo">
            Massively
          </NavLink>
        </header>

        <nav id="nav">
          <ul class="links">
            {NavDataRouter.map((element, index) => {
              const { to, title } = element;

              return <NavRouter to={to} title={title} />;
            })}
          </ul>
          <NavSocialMap />
        </nav>

        <Main ImageData={ImageData} ImageElement={ImageElement} />

        <Footer />
        <Copyright />
      </div>
    </>
  );
};

export default Elements;
