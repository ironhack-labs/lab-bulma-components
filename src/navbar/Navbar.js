import React from 'react';

function NavBar(){
    return (
        <nav className="navbar is-transparent">
        <img id='logo' src="https://bulma.io/images/bulma-logo.png" alt="Bulma" width="112" height="28"/>
          <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
            <span></span>
            <span></span>
            <span></span>
          </div>
      
        <div id="navbarExampleTransparentExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item">
              Home
            </a>
           </div>
        </div>
         
      
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control">
                  <a className="bd-tw-button button" >
                    <span>
                      Login
                    </span>
                  </a>
                </p>
                <p className="control">
                  <a className="button is-primary">
                    <span>Download</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
      </nav>

    )
}

export default NavBar;