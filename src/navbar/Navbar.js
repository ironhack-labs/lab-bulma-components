import React from 'react'
import CoolButton from '../coolbutton/CoolButton'

export default function Navbar(){
        return (
            <nav className="navbar is-transparent">

        <div class="navbar-brand">
            <a class="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
            </a>
            
        </div>

        <div id="navbarExampleTransparentExample" class="navbar-menu">
            <div class="navbar-start">
            <a class="navbar-item" href="https://bulma.io/">
            Home
                
            </a>
            </div>
        </div>

        <div class="navbar-end">
        <div class="navbar-item">
            <div class="field is-grouped">
            <p class="control">
            <CoolButton name="Login" color="button is-link is-small"/>
            </p>
            <p class="control">
            <CoolButton name="Signup" color="button is-primary is-small"/>
            </p>
            </div>
        </div>
        </div>
    </nav>
        )
}
