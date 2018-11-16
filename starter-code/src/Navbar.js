import React, {Component} from 'react';
import CoolButton from './CoolButton';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar is-transparent">
        <div className="navbar-brand">
          <a className="navbar-item" href="">
            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"></img>
          </a>
          <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div id="navbarExampleTransparentExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item" href="">
              Home
            </a>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control">

                  <CoolButton
                    buttonName='Login'
                    buttonType='button is-link' />

                  {/*
                  <a className="button is-link" >
                    <span>Login</span>
                  </a>
                  */}

                </p>
                <p className="control">

                  <CoolButton
                    buttonName='Sign Up'
                    buttonType='button is-primary' />

                  {/*
                  <a className="button is-primary" href="">
                    <span>Signup</span>
                  </a>
                  */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar;