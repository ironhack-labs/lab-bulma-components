import React from 'react';
import ReactDOM from 'react-dom';

import CoolButton from './CoolButton';

import "bulma/css/bulma.css";
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io">
                    <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: Free, open source, and modern CSS framework based on Flexbox" width="112" height="28" />
                </a>
            </div>

            <div className="navbar-menu">
                <div className="navbar-start">
                    <a className="navbar-item" href="/home">Home</a>
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="field is-grouped">
                            <p className="control">
                                <CoolButton isInfo isRounded>Login</CoolButton>
                            </p>

                            <p className="control">
                                <CoolButton isSuccess>Sign Up</CoolButton>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;