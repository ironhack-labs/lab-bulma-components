import React from "react";
import 'bulma/css/bulma.css';

import CoolButton from "./CoolButton";



document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
    
      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
    
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          console.log(">>>>>>>>>>>> TARGET IS: ", target)
          const $target = document.getElementById(target);
          console.log(">>>>>>>>>>>> $TARGET IS: ", $target)
    
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
          $target.classList.toggle('is-hidden');
    
        });
      });
    }
    
});
    



function Navbar() {

    return (
        <nav class="navbar is-transparent has-shadow">
            <div class="navbar-brand">
                <a class="navbar-item" href="https://bulma.io">
                <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
                </a>
                <a role="button" class="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>


            <div id="navMenu"  class="navbar-menu is-hidden">
                <div class="navbar-start"></div>
                <div class="navbar-end">
                    <div class="navbar-item">
                        <a class="navbar-item" href="/">Home</a>
                        <a class="navbar-item is-info" href="/">Login</a>
                        <a class="navbar-item is-primary" href="/">Sign up</a>
                    </div>
                </div>
            </div>


            {/* display a link to "Home", "Login" and "Signup" like in the following example: */}
            <div class="navbar-menu">

                <div class="navbar-start">
                    <a class="navbar-item" href="/">Home</a>
                </div>

                <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="field is-grouped">
                            <CoolButton classes="button is-info" label="Login" />
                            <CoolButton classes="button is-primary" label="Sign up" />
                        </div>
                    </div>
                </div>

            </div>


        </nav>
    );
}

export default Navbar;
