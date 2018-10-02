import React from "react";
import 'bulma/css/bulma.css';

export const Navbar = () => {
    return (
        <nav class="navbar is-transparent">
            <div class="navbar-brand">
                <a className="navbar-item" href="https://bulma.io">
                    <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma" width="112" height="28"/>
                </a>
                <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>   
            </div>

            <div id="navbarExampleTransparentExample" class="navbar-menu">
             <div class="navbar-start">
             <a class="navbar-item" href="https://bulma.io/">Home</a>
             </div>
            </div>

            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="field is-grouped">
                         <p class="control">
                            <a class="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="http://localhost:4000" target="_blank" href="https://twitter.com/intent/tweet?ms">
                                <span>Login</span>
                            </a>
                        </p>
                        <p class="control">
                            <a class="button is-primary" href="https://github.com/jgthms/bulma/releases/download/0.7.1/bulma-0.7.1.zip">
                                <span>Signup</span>
                            </a>
                        </p>
                    </div>
                </div>
            </div>      
        </nav>
        
    )
}