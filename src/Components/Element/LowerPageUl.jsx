import React from "react";

const LowerPageUl = ({ UlClassName, ButtonClassName, Name }) => {
  return (
    <>
      <ul className={UlClassName[0]}>
        <li>
          <a href="#" className={ButtonClassName[1]}>
            {Name[0]}
          </a>
        </li>
        <li>
          <a href="#" className={ButtonClassName[0]}>
            {Name[1]}
          </a>
        </li>
      </ul>
      <ul className={UlClassName[0]}>
        <li>
          <a href="#" className={ButtonClassName[2]}>
            {Name[2]}
          </a>
        </li>
        <li>
          <a href="#" className={ButtonClassName[0]}>
            {Name[1]}
          </a>
        </li>
        <li>
          <a href="#" className={ButtonClassName[3]}>
            {Name[3]}
          </a>
        </li>
      </ul>
      <ul className={UlClassName[1]}>
        <li>
          <a href="#" className={ButtonClassName[5]}>
            {Name[4]}
          </a>
        </li>
        <li>
          <a href="#" className={ButtonClassName[4]}>
            {Name[4]}
          </a>
        </li>
      </ul>
      <ul className={UlClassName[2]}>
        <li>
          <a href="#" className={ButtonClassName[6]}>
            {Name[5]}
          </a>
        </li>
        <li>
          <a href="#" className={ButtonClassName[7]}>
            {Name[5]}
          </a>
        </li>
      </ul>
      <ul className={UlClassName[0]}>
        <li>
          <a href="#" className={ButtonClassName[8]}>
            {Name[6]}
          </a>
        </li>
        <li>
          <a href="#" className={ButtonClassName[9]}>
            {Name[6]}
          </a>
        </li>
      </ul>
      <ul className={UlClassName[0]}>
        <li>
          <span className={ButtonClassName[10]}>{Name[0]}</span>
        </li>
        <li>
          <span className={ButtonClassName[11]}>{Name[1]}</span>
        </li>
      </ul>
    </>
  );
};

export default LowerPageUl;
