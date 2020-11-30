import "bulma/css/bulma.css";
import React from "react";
import CoolButton from "../button/CoolButton";

const Navbar = () => {
  return (
    <div className="Navbar">
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
          <div
            class="navbar-burger burger"
            data-target="navbarExampleTransparentExample"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
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
                       
                            <CoolButton className="button is-rounded is-danger" type="submit" title="Log in"/>
                            <CoolButton className="button  is-success" type="submit" title="Sign Up"/>
                         
                        
                        </div>
                    </div>
                    </div>
                </div>
            </nav>
        </div>
  );
};

export default Navbar;
