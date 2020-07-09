import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './Navbar.css'
import CoolButton from '../coolbutton/CoolButton';

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar is-transparent">
                    <div className="navbar-brand">
                        <a className="navbar-item" href="https://bulma.io">
                            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" /></a>
                    </div>
                    <div id="navbarExampleTransparentExample" className="navbar-menu">
                        <div className="navbar-start">
                            <a className="navbar-item" href="/">
                                Home
                            </a>
                        </div>
                        <div className="navbar-end">
                                <CoolButton
                                    inner="Login"
                                    class="button is-rounded my-class is-danger is-small"
                                />
                                <CoolButton
                                    inner="Signup"
                                    class="button is-small is-success"
                                />
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;


