import React from "react"
import Buttons from "../coolbutton/CoolButton"
import "../App.css"


function Navbar() {
    return (
        <nav className="navbar is-transparent">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
          </a>
          <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      
        <div id="navbarExampleTransparentExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item" href="https://bulma.io/">
              Home
            </a>
          </div>
      
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field is-grouped">
                <Buttons className="login" label="Login"/>
                <Buttons className="signup" label="Signup"/>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
}


export default Navbar
