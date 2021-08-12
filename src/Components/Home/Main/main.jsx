import React from "react";
import ArticleOne from "./articleOne";
import Section from "../Section/Section";
import Footer from "../Section/Footer";

const main = ({ date }) => {
  return (
    <>
      <div id="main">
        <ArticleOne date={date} />

        <Section />

        <Footer />
      </div>
    </>
  );
};

export default main;
