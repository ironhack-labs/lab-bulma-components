import React from 'react'
import 'bulma/css/bulma.css'
import './Navbar.css'
import CoolButton from '../coolbutton/CoolButton'

const Navbar = () => {
    return (
        <nav className="navbar is-light">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                    <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma Logo" width="112" height="28" />
                </a>
            </div>

            <div id="navbarExampleTransparentExample" className="navbar-menu">
                <div className="navbar-start">
                    <a className="navbar-item" href="/">Home</a>
                </div>
            </div>

            <div className="navbar-end">
                <div className="navbar-item">
                    <div className="field is-grouped">
                        <p className="control">
                            <CoolButton className="is-info" >Login</CoolButton>
                        </p>
                        <p className="control">
                            <CoolButton className="is-primary" >Signup</CoolButton>
                        </p>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar