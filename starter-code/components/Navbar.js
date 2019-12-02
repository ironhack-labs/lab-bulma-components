import React from "react";

function Navbar() {
  return (
    <div className="navbar">
        <div className="navbar-brand">
        <a class="navbar-item" href="">
        <img src="/images/bulma-logo.png" alt="Home image" width="112" height="28"/>
        </a>        
        </div>
        
        <div id="navbarBasicExample" class="navbar-menu">
             <div class="navbar-start">
                <a class="navbar-item">
                Home
                </a> 
              </div>
              <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                        <a class="button is-info">
                            <strong>Sign up</strong>
                        </a>
                        <a class="button is-primary">
                         Log in
                        </a>
                    </div>
                </div>
            </div>
        
        </div>
    </div>
    );
}

export default Navbar;