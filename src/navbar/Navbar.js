import React from 'react';
import 'bulma/css/bulma.css';
import './Navbar.css'
import CoolButton from '../CoolButton/CoolButton'

const Nav = () => {
    return (
        <nav className="navbar navb" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">

                <a className="navbar-item" href="https://bulma.o">
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
                </div>

                <CoolButton isSmall isDanger className="is-rounded my-class" value="Log in">Log in</CoolButton>
                <CoolButton isSmall isSuccess value="Sign Up">Sign Up</CoolButton>
            </div>
        </nav>
    )
};

export default Nav;
