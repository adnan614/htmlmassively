import React from "react";
import Article from "./Article";
import SectionData from "./SectionData";

const Section = () => {
  return (
    <>
      <section className="posts">
        {SectionData.map((element, index) => {
          const { date, titleUp, titleDown, Image, paragraph } = element;
          return (
            <Article
              date={date}
              titleUp={titleUp}
              titleDown={titleDown}
              Image={Image}
              paragraph={paragraph}
            />
          );
        })}
      </section>
    </>
  );
};

export default Section;
