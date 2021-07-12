import React from "react";
import CoolButton from '../coolbutton/CoolButton'

let NavBar = () => {
    return (
    <div>
        <nav className="navbar is-transparent">
            <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io">
                <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
                </a>
                <div className="navbar-burger" data-target="navbarExampleTransparentExample">
                <span></span>
                <span></span>
                <span></span>
                </div>
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
                        <CoolButton isSmall={'is-small'} isDanger={'is-danger'} className="is-rounded my-class">Login</CoolButton>
                        <CoolButton isSmall={'is-small'} isSuccess={'is-success'}>Signup</CoolButton>
                    </div>
                </div>
                </div>
            </div>
            </nav>
    </div>
    )
}

export default NavBar;