import React from 'react'
import CoolButton from '../coolbutton/CoolButton'

function Navbar() {
    return (
        <nav className="navbar is-transparent">
            <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io">
                    <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"></img>
                </a>
                <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
                </div>
            </div>

            <div id="navbarExampleTransparentExample" className="navbar-menu">
                <div className="navbar-start">
                    <a className="navbar-item" href="https://bulma.io/">
                        Home
                    </a>
                </div>
            </div>

            <div className="navbar-end">
                <div className="navbar-item">
                    <div className="field is-grouped">
                        <CoolButton isSmall isDanger className="is-rounded my-class">Login</CoolButton>
                        <CoolButton isSmall isSuccess>Signup</CoolButton>  
                    </div>
                </div>
            </div>

        </nav>
    )
}

export default Navbar;