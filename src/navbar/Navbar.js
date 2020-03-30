import React from 'react';
import 'bulma/css/bulma.css';


const Navbar = () => {
    return (

        <nav className="navbar is-transparent">
            <a className="navbar-item" href="https://bulma.io">
                <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="90" height="28" />
            </a>

            <div id="navbarExampleTransparentExample" className="navbar-menu">
                <div className="navbar-start">
                    <a className="navbar-item" href="https://bulma.io/">
                        Home
        </a>
                </div>
            </div>
            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="field is-grouped">
                        <p class="control">
                            <a class="bd-tw-button button" href='#'>
                                <span class="icon">
                                  
                                </span>
                                <span>Login</span>
                            </a>
                        </p>
                        <p class="control">
                            <a class="button is-primary" href="localhost:3000">
                                <span class="icon">
                                </span>
                                <span>SignUp</span>
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </nav>

    )
}
export default Navbar