import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import './Navbar.css'
import CoolButton from '../coolbutton/CoolButton';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar has-background-white-ter" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://bulma.io">
                    <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/>
                    </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <a className="navbar-item" href="/">
                            Home
                        </a>
                    </div>
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <CoolButton classes="button is-primary" text="Log in" />
                                <CoolButton classes="button is-info" text="Sign up" />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
