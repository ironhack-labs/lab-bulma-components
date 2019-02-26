import React, { Component } from "react";

class Nav extends Component{
    render(){
        return(
        <div>

            <nav className="navbar is-transparent">
  <div className="navbar-brand">
    <p className="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
    </p>

  <div id="navbarExampleTransparentExample" className="navbar-menu">
    <div className="navbar-start">
      <p className="navbar-item" >
        Home
      </p>
    <div className="navbar-end">
      <div className="navbar-item">
        <div className="field is-grouped">
          <p className="control">
            <a className="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="http://localhost:4000" target="_blank" href="/">
              <span>
                Log in
              </span>
            </a>
          </p>
        </div>
      </div>
    </div>
    <div className="navbar-end">
      <div className="navbar-item">
        <div className="field is-grouped">
          <p className="control">
            <a className="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="http://localhost:4000" target="_blank" href="/">
              <span>
                Sign up
              </span>
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>

  </nav>
                

        </div>
        )
    }
}

export default Nav