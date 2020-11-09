import React from "react";

// Components for NavBar
import NavBarBrand from "./NavBarBrand";
import NavBarMenu from "./NavBarMenu";
import NavBarButtons from "./NavBarButtons";

function NavBar() {
  return (
    <nav className="navbar is-transparent">
      <NavBarBrand />
      <div id="navbarExampleTransparentExample" className="navbar-menu">
        <NavBarMenu />
      </div>
      <div className="navbar-end">
        <NavBarButtons />
      </div>
    </nav>
  );
}

export default NavBar;
