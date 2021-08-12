import React from "react";

const Header = ({ date }) => {
  return (
    <>
      <header className="major">
        <span className="date">{date}</span>
        <h2>
          <a href="#">
            And this is a<br />
            massive headline
          </a>
        </h2>
        <p>
          Aenean ornare velit lacus varius enim ullamcorper proin aliquam
          <br />
          facilisis ante sed etiam magna interdum congue. Lorem ipsum dolor
          <br />
          amet nullam sed etiam veroeros.
        </p>
      </header>
    </>
  );
};

export default Header;
