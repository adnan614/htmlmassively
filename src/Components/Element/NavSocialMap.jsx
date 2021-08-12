import React from 'react'
import NavDataLink from "../Home/NavDataLink";
import NavSocial from "../Home/NavSocial";

const NavSocialMap = () => {
    return (
      <>
        <ul class="icons">
          {NavDataLink.map((elem, index) => {
            const { name, icon } = elem;
            return <NavSocial name={name} icon={icon} />;
          })}
        </ul>
      </>
    );
}

export default NavSocialMap
