import React from "react";

const Definition = ({ item, paragraph }) => {
  return (
    <>
      <dt>{item}</dt>
      <dd>
        <p>{paragraph}</p>
      </dd>
    </>
  );
};

export default Definition;
