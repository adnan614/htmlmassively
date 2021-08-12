import React from "react";

const ImageElement = ({ image }) => {
  return (
    <>
      <div class="col-4">
        <span class="image fit">
          <img src={image} alt="" />
        </span>
      </div>
    </>
  );
};

export default ImageElement;
