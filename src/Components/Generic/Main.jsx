import React from "react";
import ImageOne from "../../../src/images/pic01.jpg";
import Section from "./Section";

const Main = () => {
  const date = new Date().toDateString();
  return (
    <>
      <div id="main">
        <Section date={date} ImageOne={ImageOne} />
      </div>
    </>
  );
};

export default Main;
