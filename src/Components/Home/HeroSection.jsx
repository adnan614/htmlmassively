import React from "react";
import IntroCaption from "./IntroCaption";

const HeroSection = () => {

  return (
    <>
      <div id="intro">
        <IntroCaption />
        <p>
          A free, fully responsive HTML5 + CSS3 site template designed by
          <a href="https://twitter.com/ajlkn">@ajlkn</a> for
          <a href="https://html5up.net">HTML5 UP</a>
          <br />
          and released for free under the
          <a href="https://html5up.net/license">Creative Commons license</a>.
        </p>
        <ul className="actions">
          <li>
            <a
              href="#header"
              className="button icon solid solo fa-arrow-down scrolly"
            >
              Continue
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default HeroSection;
