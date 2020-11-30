import React from 'react';
import './Navbar.css';
import 'bulma/css/bulma.css';
import CoolButton from '../coolbutton/CoolButton';


export default function Navbar(props) {
    return (
        <nav className="navbar is-transparent is-fixed-top">
            <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io">
                    <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
                </a>
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
                        <a href="#">
                            <CoolButton className="button is-rounded my-class is-small is-danger" name="Log In" />
                        </a>
                    </p>
                    <p className="control">
                        <a href="#">
                            <CoolButton className="button is-small is-success" name="Sign Up" />
                        </a>
                    </p>
                    </div>
                </div>
                </div>
            </div>
        </nav>
    )
}
