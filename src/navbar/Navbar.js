import React from "react";
import CoolButton from "../coolbutton/CoolButton";

import "bulma/css/bulma.css";

const Navbar = () => {
  return (
    <div>
      {/* <CoolButton
        isSmall
        isDanger
        className="is-rounded my-class"
        btnText="Sign Up"
      /> */}
      <nav className="navbar is-transparent">
        <div className="navbar-brand">
          <a className="navbar-item">
            <img src="https://bulma.io/images/bulma-logo.png"></img>
          </a>
        </div>
        <div className="navbar-menu">
          <div className="navbar-start">
            {" "}
            <a className="navbar-item"> Home</a>
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <CoolButton isSuccess className=" my-class" btnText="Login" />
              <CoolButton isLight className=" my-class" btnText="Signup" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
