import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar is-transparent">

            <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io" >
                    <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
                </a>
                <div className="navbar-burger" data-target="navbarExampleTransparentExample">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            
            <div className="navbar-menu">
                <div className="navbar-start">
                    <a className="navbar-item" href="https://bulma.io/">
                        Home
                    </a>
                </div>
                <div className="navbar-end">
                    <div className="field is-grouped">
                        <div className="control">
                            <a className="button is-info" href="/login">
                                Login
                            </a>
                        </div>
                        <div className="control">
                            <a className="button is-primary" href="/login">
                                Sign up
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </nav>
    )
}

export default Navbar;