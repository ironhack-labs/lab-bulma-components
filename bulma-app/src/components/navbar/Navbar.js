import React from 'react'
import CoolButton from '../CoolButton/CoolButton'
import './navbar.css'

const Navbar = () => {
    return (
        <>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://bulma.io">
                        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="bulma-img" />
                    </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <a href="/" className="navbar-item">Home</a>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <CoolButton isSmall isDanger className="is-rounded my-class">Sign Up</CoolButton>
                                <CoolButton isSmall isSuccess>Login</CoolButton>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>)

}

export default Navbar