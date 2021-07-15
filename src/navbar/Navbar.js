import React, {Component} from 'react';
import 'bulma/css/bulma.css';

class Navbar extends Component {
    render() {
     return (
            <nav className="navbar is-transparent navbarContainer">
              <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io">
                  <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/>
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
                        <strong>Login</strong>
                      </a>
                      <a className="button is-primary">
                      Sign up 
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
        );
    }
    }

    export default Navbar
