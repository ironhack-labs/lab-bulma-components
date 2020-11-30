import React from 'react';
import 'bulma/css/bulma.css';
import CoolButton from './../CoolButton/CoolButton';


// Iteration 1
const Navbar = () => {
    return (
        <nav class="navbar is-light" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item" href="https://bulma.io"><img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" /></a>
                <a class="navbar-item">Home</a>
                <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="buttons">
                            <CoolButton class="button is-rounded is-primary">Log in</CoolButton>
                            <CoolButton class="button is-rounded is-danger">Sign up</CoolButton>
                        </div>
                    </div>
                </div>      
            </div>
        </nav>
    );
}

export default Navbar;