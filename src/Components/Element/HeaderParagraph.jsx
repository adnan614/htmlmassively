import React from "react";

const HeaderParagraph = ({ header, smallPara, longPara }) => {
  return (
    <>
      <header>
        <h2>{header}</h2>
        <p>{smallPara}</p>
      </header>
      <p>{longPara}</p>
    </>
  );
};

export default HeaderParagraph;
