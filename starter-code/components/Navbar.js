import React from "react";

function Navbar() {
  return (
    <div className="navbar">
        <div className="navbar-brand">
        <a className="navbar-item" href="">
        <img src="/images/bulma-logo.png" alt="Home image" width="112" height="28"/>
        </a>        
        </div>
        
        <div id="navbarBasicExample" className="navbar-menu">
             <div className="navbar-start">
                <a className="navbar-item">
                Home
                </a> 
              </div>
              <div className="navbar-end">
                <div className="navbar-item">
                    <div className="buttons">
                        <a className="button is-info">
                            <strong>Sign up</strong>
                        </a>
                        <a className="button is-primary">
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