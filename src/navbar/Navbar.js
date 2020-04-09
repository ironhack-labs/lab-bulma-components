import 'bulma/css/bulma.css';
import React, {Component} from "react";

class Navbar extends Component {
    render() {
      return (
        //PASTE LINK:To help you, you can use the code from the Bulma Transparent Navbar.
        <nav class="navbar is-transparent">
            <div class="navbar-brand">
                <a class="navbar-item" href="https://bulma.io">
                <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
                </a>
                <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
                </div>
            </div>

            <div id="navbarExampleTransparentExample" class="navbar-menu">
                <div class="navbar-start">
                    <a class="navbar-item" href="https://bulma.io/">
                        Home
                    </a>
            </div>

                <div class="navbar-end">
                <div class="navbar-item">
                    <div class="field is-grouped">
                    <p class="control">
                    <a class="bd-button button">
                        <span>
                            Login
                        </span>
                        </a>
                    </p>
                    <p class="control">
                        <a class="button is-primary">
                        <span>
                          Sign up
                          </span>
                        </a>
                    </p>
                    </div>
                </div>
                </div>
            </div>
        </nav>
      );
    }
  } 
  

          
  export default Navbar;
