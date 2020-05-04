import React from "react";
import 'bulma/css/bulma.css';
import "./Navbar.css";
import CoolButton from "../CoolButton/CoolButton.js"
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div >
            <nav id="navbar" className="navbar is-transparent" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://bulma.io">
                        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
                    </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div id="home" className="navbar-start">
                        <Link to="/">
                            Home
                        </Link>

                    </div>
                </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <CoolButton isInfo >
                                Log in
                            </CoolButton>
                            <Link to="/signup">
                                <CoolButton isPrimary >
                                    Sign up
                        </CoolButton>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav >
        </div >
    );
}

export default Navbar;