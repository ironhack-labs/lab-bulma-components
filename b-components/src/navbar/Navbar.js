import React from 'react'
import 'bulma/css/bulma.css';
import Coolbutton from '../coolbutton/Coolbutton'

const Navbar = () => {
    return (

        <nav class="navbar is-transparent">
        <div class="navbar-brand">
            <a class="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
            </a>
        </div>

        <div id="navbarExampleTransparentExample" class="navbar-menu">

            <div class="navbar-end">
            <div class="navbar-item">
                <div class="field is-grouped">
                <p class="control">
                   <Coolbutton className="button is-rounded my-class is-danger is-small" text ="Log In"></Coolbutton>
                </p>
                <p class="control">
                    <Coolbutton className="button is-small is-success" text="Sign Up"></Coolbutton>
                </p>
                </div>
            </div>
            </div>
        </div>

        </nav>
                    

    );
}

export default Navbar;