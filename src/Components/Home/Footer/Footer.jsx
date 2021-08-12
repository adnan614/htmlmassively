import React from "react";
import NavLink from "../NavSocial";
import NavDataLink from "../../Home/NavDataLink";

const Footer = () => {
  return (
    <>
      <footer id="footer">
        <section>
          <form method="post" action="#">
            <div className="fields">
              <div className="field">
                <label for="name">Name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="field">
                <label for="email">Email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="field">
                <label for="message">Message</label>
                <textarea name="message" id="message" rows="3"></textarea>
              </div>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" />
              </li>
            </ul>
          </form>
        </section>
        <section className="split contact">
          <section className="alt">
            <h3>Address</h3>
            <p>
              1234 Somewhere Road #87257
              <br />
              Nashville, TN 00000-0000
            </p>
          </section>
          <section>
            <h3>Phone</h3>
            <p>
              <a href="#">(000) 000-0000</a>
            </p>
          </section>
          <section>
            <h3>Email</h3>
            <p>
              <a href="#">info@untitled.tld</a>
            </p>
          </section>
          <section>
            <h3>Social</h3>
            <ul className="icons alt">
              {NavDataLink.map((element, index) => {
                const { name, icon } = element;
                return <NavLink name={name} icon={icon} />;
              })}
            </ul>
          </section>
        </section>
      </footer>
    </>
  );
};

export default Footer;
