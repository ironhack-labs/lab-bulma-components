import 'bulma/css/bulma.css';
import React from 'react';
import CoolButton from './../CoolButton/CoolButton';

const NavBar = () => {
    return (

        <nav className="navbar is-transparent">
            <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io">
                    <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
                </a>
                <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div id="navbarExampleTransparentExample" className="navbar-menu">
                <div className="navbar-start">
                    <a className="navbar-item" href="https://bulma.io/">Home</a>
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <CoolButton className="button is-rounded my-class is-danger is-small" textButton="Login" />
                            <CoolButton className="button is-small is-success" textButton="Signup" />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar