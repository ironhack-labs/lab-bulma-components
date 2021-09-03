import React from "react";
import 'bulma/css/bulma.css';
import "./navbar.css";
import CoolButton from "../coolButton/coolButton";

const Navbar = () => (
    <div>
        <nav className="navbar is-transparent">
            <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io">
                    <img src="https://bulma.io/images/bulma-logo.png" 
                        alt="Bulma: a modern CSS framework based on Flexbox" 
                        width="112" 
                        height="28"
                    />
                </a>
                <div className="navbar-burger" data-target="navbarExampleTransparentExample"></div>
            </div>

            <div id="navbarExampleTransparentExample" className="navbar-menu">
                <div className="navbar-start">
                    <a className="navbar-item" href="https://bulma.io/">
                        Home
                    </a>        
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <CoolButton className="is-info">
                                <strong>Sign up</strong>
                            </CoolButton>

                            <CoolButton className="is-primary">
                                <strong>Log in</strong>
                            </CoolButton>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
);

export default Navbar;