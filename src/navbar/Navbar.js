import React, { Component } from 'react';
// import '../navbar/Navbar.css'
import CoolButton from '../coolButton/CoolButton';
import 'bulma/css/bulma.css';
import InsertButtons from '../coolButton/InsertButtons';


class Navbar extends Component {
  render(){
    return (
      <div className="NavBar">
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href="https://bulma.io">
              <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
            </a>

            <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item">
                Home
              </a>
                <div className="navbar-dropdown">
                  <a className="navbar-item">
                    About
                  </a>
                  <a className="navbar-item">
                    Jobs
                  </a>
                  <a className="navbar-item">
                    Contact
                  </a>
                  <hr className="navbar-divider" />
                  <a className="navbar-item">
                    Report an issue
                  </a>
                </div>
              </div>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <InsertButtons className="button is-success is-rounded"> Log in </InsertButtons>
                <InsertButtons className="button isSmall is-info" value="SignUp">SignUp</InsertButtons>
                {/* <div className="buttons">
                  <a className="button is-primary">
                    <strong>Sign up</strong>
                  </a>
                  <a className="button is-light">
                    Log in
                  </a>
                </div> */}
              </div>
            </div>
        </nav>
      </div>
    )
  }
}

export default Navbar;