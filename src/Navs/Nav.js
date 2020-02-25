import React from 'react';
import './App.css';
import CoolButton1 from "./CoolButton1"
import CoolButton2 from "./CoolButton2"
function Nav() {
    return (
        // <>
        <nav className="navbar is-transparent">
            <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io">
                    <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" /></a>
                <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div id="navbarExampleTransparentExample" className="navbar-menu">
                <div className="navbar-start">
                    <a className="navbar-item" href="https://bulma.io/" />
                    HOMER
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="field is-grouped">
                            <p className="control">

                                <CoolButton1 text="gueyy" />

                            </p>
                            <p className="control">

                                <CoolButton2 text="nomas" />

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </nav>


    );
}

export default Nav;
