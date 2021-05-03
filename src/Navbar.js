import React from 'react';
import 'bulma/css/bulma.css';


const Navbar = () => {
    return (
        <nav className="navbar is-transparent">
            <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io">
                    <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"></img>
                </a>
                <div className="navbar-burger" data-target="navbarExampleTransparentExample">
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
                    <p className="control">
                    <a className="bd-tw-button button is-info" data-social-target="https://bulma.io" target="_blank">
                        <span>
                        Login
                        </span>
                    </a>
                    </p>
                    <p className="control">
                    <a className="button is-primary" href="https://github.com/jgthms/bulma/releases/download/0.9.2/bulma-0.9.2.zip">
                        <span>Signup</span>
                    </a>
                    </p>
                </div>
                </div>
            </div>
            </div>
        </nav>
        )
    }

export default Navbar;