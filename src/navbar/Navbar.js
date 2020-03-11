import React from 'react';
import CoolButton from '../coolbutton/coolButton'

const Navbar = () => {
    return (    
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item" href="https://bulma.io">
                <img src="https://bulma.io/images/bulma-logo.png"/>
            </a>
            <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" />
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </div>

        <div class="navbar-end">
            <div class="navbar-item">
                <div class="buttons">
                    <CoolButton>
                        <strong>Sign up</strong>
                    </CoolButton>
                    <CoolButton>
                        Log in
                    </CoolButton>
                </div>
            </div>
        </div>
    </nav>
    )
}

export default Navbar;