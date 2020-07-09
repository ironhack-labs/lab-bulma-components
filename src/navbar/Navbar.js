import 'bulma/css/bulma.css';
import React, {Component} from 'react'

class Navbar extends Component {
    render() {
        return (
            <div>
            <nav className="navbar is-light">
            <div className="navbar-brand">
              <a className="navbar-item" href="https://bulma.io">
                <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
              </a>
            </div>
          
            <div id="navbarExampleTransparentExample" className="navbar-menu">
              <div className="navbar-start">
                <a className="navbar-item" href="/">
                  Home
                </a>
              </div>
          
              <div class="navbar-end">
                <div class="navbar-item">
                  <div class="field is-grouped">
                    <p class="control">
                      <a class="button is-info" href="/">
                        <span>
                          Login
                        </span>
                      </a>
                    </p>
                    <p class="control">
                      <a class="button is-primary" href="/">
                        <span>SignUp</span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </nav> 
          </div>
        )
    }
}

export default Navbar