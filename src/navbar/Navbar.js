import React from 'react';

const Navbar = () => {
    return (<nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://bulma.io">
                    <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: Free, open source, and modern CSS framework based on Flexbox" width="112" height="28"/>
                    </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <a className="navbar-item">
                            Home
                        </a>
                    </div>
                </div>
                
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <a className="button is-primary">
                                <strong>Log in</strong>
                            </a>
                            <a className="button is-light" href="./Signup/Signup">
                                Sign up
                            </a>
                        </div>
                    </div>
                </div>
            </nav>)
}

export default Navbar