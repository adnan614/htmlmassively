import React from "react";
import ButtonSubOne from "./ButtonSubOne";
import ButtonSubTwo from "./ButtonSubTwo";

const ButtonDivone = () => {
  return (
    <>
      <div class="row">
        <div class="col-6 col-12-small">
          <ul class="actions stacked">
            <ButtonSubOne />
          </ul>
        </div>
        <div class="col-6 col-12-small">
          <ul class="actions stacked">
            <ButtonSubTwo />
          </ul>
        </div>
      </div>
    </>
  );
};

export default ButtonDivone;
