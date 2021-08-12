import React from "react";

const Actions = (props) => {
  return (
    <>
      <ul class="actions">
        <li>
          <a href="#" class="button primary">
            {props.valueA[0]}
          </a>
        </li>
        <li>
          <a href="#" class="button">
            {props.valueA[1]}
          </a>
        </li>
      </ul>
      <ul class="actions small">
        <li>
          <a href="#" class="button primary small">
            {props.valueA[2]}
          </a>
        </li>
        <li>
          <a href="#" class="button small">
            {props.valueA[2]}
          </a>
        </li>
      </ul>
    </>
  );
};

export default Actions;
