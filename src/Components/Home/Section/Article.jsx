import React from "react";

const Article = ({ date, titleUp, titleDown, Image, paragraph }) => {
  return (
    <>
      <article>
        <header>
          <span className="date">{date}</span>
          <h2>
            <a href="#">
              {titleUp}
              <br />
              {titleDown}
            </a>
          </h2>
        </header>
        <a href="#" className="image fit">
          <img src={Image} alt="" />
        </a>
        <p>{paragraph}</p>
        <ul className="actions special">
          <li>
            <a href="#" className="button">
              Full Story
            </a>
          </li>
        </ul>
      </article>
    </>
  );
};

export default Article;
