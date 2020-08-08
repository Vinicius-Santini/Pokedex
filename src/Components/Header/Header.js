import React from "react";
import LinkWrapper from "../../utils/LinkWrapper";

const Header = () => {
  return (
    <nav>
      <div className="nav-wrapper indigo lighten-2">
        {/* <LinkWrapper to="/" className="brand-logo" activeStyle={{}}>
          Pokedex
        </LinkWrapper>
        <ul className="right">
          <li>
            <LinkWrapper to="/favoritos">Favoritos</LinkWrapper>
          </li>
          <li>
            <LinkWrapper to="/sobre">Sobre</LinkWrapper>
          </li>
        </ul> */}
      </div>
    </nav>
  );
};
export default Header;
