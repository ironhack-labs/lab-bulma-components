import React from 'react';
import './Navbar.css';

function Navbar () {
    return (
        <div class="nav-bar">
            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"></img>
            <a class="link-navbar" href="#">Home</a>
            <ul>
                <li><a class="link-button" href="#">Login</a></li>
                <li><a class="link-button" href="#">Signup</a></li>
            </ul>
        </div>
    )
} 
