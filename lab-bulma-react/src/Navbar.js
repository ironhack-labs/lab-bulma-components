import React from 'react';
import CoolButton from './CoolButton';

function Navbar() {
    return( 
    <nav class="navbar is-transparent">
      <div class="navbar-brand">
        <a class="navbar-item">This is the brand</a>
        <a class="navbar-item" href="#">Home</a>
        {/* <a class="bd-tw-button button" data-social-target="http://localhost:4000" target="_blank">Log in</a>
        <a class="button is-primary">Sign up</a> */}
        <CoolButton />
      </div>
    </nav>
    )
}

export default Navbar;