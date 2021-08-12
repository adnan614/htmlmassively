import React from "react";
import { NavLink } from "react-router-dom";
import HeroSection from "./Home/HeroSection";
import Header from "./Home/Header";
import Nav from "./Home/Nav";
import Main from "./Home/Main/main";
import Footer from "./Home/Footer/Footer";
import Copyright from "./Copyright";
const Home = () => {
  const showDate = new Date().toDateString();
  return (
    <>
      <div id="wrapper" className="fade-in">
        <HeroSection />
        <Header />
        <Nav />

        <Main date={showDate} />

        <Footer />
        <Copyright />
      </div>
    </>
  );
};

export default Home;
