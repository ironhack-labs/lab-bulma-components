import React from "react"
import CoolButton from './CoolButoon'
 class NavBar extends React.Component{
     render() {
        return (
            <nav className="navbar" role="navigation" aria-label="main navigation">
              <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io">
                  <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/>
                </a>
              </div>
              <div id="navbarBasicExample" className="navbar-menu">
                <div className = "navbar-start">
                  <a className = "navbar-item"> Home </a>
                </div>
              </div>
              < div className = "navbar-end" >
                <div className = "navbar-item" >
                  <div className = "buttons" >
                    <CoolButton className = "button is-danger" > Sign up </CoolButton>
                    <CoolButton className = "button is-light">Log in</CoolButton>
                  </div>
                </div>
              </div>
            </nav>
        )
     }
 }

export default NavBar;