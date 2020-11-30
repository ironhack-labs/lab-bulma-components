import React from 'react';
import 'bulma/css/bulma.css';
import Button from './../CoolButton/CoolButton'

const Nav = () => {
    return (
        <nav className="navbar is-transparent">
            <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io">
                    <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
                </a>
            </div>
            <div id="navbarExampleTransparentExample" class="navbar-menu">
                <div className="navbar-start">
                    <a className="navbar-item" href="/">
                        Home
                    </a>
                </div>
            </div>
            <div className="navbar-end">
                <div className="navbar-item">
                    <div className="field is-grouped">
                        <Button class="button is-rounded my-class is-danger is-small" name="Log in" />
                        <Button class="button is-small is-success" name="Sign up" />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav