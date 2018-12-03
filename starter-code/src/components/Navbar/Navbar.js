import React from "react";
import "./Navbar.css";
import "../CoolButton/CoolButton.js"
import CoolButton from "../CoolButton/CoolButton";


class Navbar extends React.Component {
    render() {
        return (
            <div className="Navbar">
                <nav className="navbar is-transparent">
                    <div className="navbar-brand">

                        <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>

                    <div id="navbarExampleTransparentExample" className="navbar-menu">
                        <div className="navbar-start">
                            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: Free, open source, &amp; modern CSS framework based on Flexbox"></img>
                            <a className="navbar-item" href="https://bulma.io/">
                                Home
                          </a>
                        </div>

                        <div className="navbar-end">
                            <div className="navbar-item">
                                <div className="field is-grouped">
                                    <CoolButton isSmall isInfo>Login</CoolButton>
                                    <CoolButton isSmall isPrimary>Signup</CoolButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;








