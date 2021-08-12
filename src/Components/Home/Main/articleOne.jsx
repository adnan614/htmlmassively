import React from "react";
import Header from "../Main/Header";
import Button from "./Button";
import ImageOne from "../../../images/pic01.jpg";

const articleOne = ({ date }) => {
  return (
    <>
      <article className="post featured">
        <Header date={date} />

        <a href="#" className="image main">
          <img src={ImageOne} alt="" />
        </a>
        <ul className="actions special">
          <li>
            <Button />
          </li>
        </ul>
      </article>
    </>
  );
};

export default articleOne;
