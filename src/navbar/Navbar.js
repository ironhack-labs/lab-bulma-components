import React from "react";
import "bulma/css/bulma.css";
import CoolButton from '../coolButton/CoolButton';

const NavBar = () => {
  return (
    <div>
      <nav class="navbar is-transparent">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://bulma.io">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              alt="Bulma: a modern CSS framework based on Flexbox"
              width="112"
              height="28"
            />
          </a>
        </div>
        <div id="navbarExampleTransparentExample" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item" href="https://bulma.io/">
              Home
            </a>
          </div>
          <div class="navbar-end">
            <div class="navbar-item">
              <div class="field is-grouped">
                <p class="control">      
                  <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
                </p>
                <p class="control">
                  <CoolButton isSmall isSuccess>Button 2</CoolButton> 
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default NavBar;
