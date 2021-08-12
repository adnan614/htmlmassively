import React from "react";

const ImageLeftRight = ({ className, image, para }) => {
  return (
    <>
      <p>
        <span className={className}>
          <img src={image} alt="" />
        </span>
        {para}
      </p>
      <p>
        <span class={className}>
          <img src={image} alt="" />
        </span>
        {para}
      </p>
    </>
  );
};

export default ImageLeftRight;
