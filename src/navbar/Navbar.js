import React from 'react'
import CoolButton from '../coolbutton/CoolButton'
import './Navbar.css'

function Navbar(){
    return(
        <nav className="navbar is-light">
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
                        <div className="buttons">
                            <CoolButton isInfo>
                                Log in
                            </CoolButton>
                            <CoolButton isPrimary>
                                Sign up
                            </CoolButton>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar