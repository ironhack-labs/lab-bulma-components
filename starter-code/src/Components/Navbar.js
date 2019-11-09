import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div className='Navbar'>
                <nav class="navbar is-transparent">
                    <div class="navbar-brand">
                        <a class="navbar-item" href="https://bulma.io">
                            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
                        </a>
                        <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
                        <span></span>
                        <span></span>
                        <span></span>
                        </div>
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
                                    <a class="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="https://bulma.io">
                                        <span class="icon">
                                            <i class="fab fa-twitter"></i>
                                        </span>
                                        <span>
                                            Tweet
                                        </span>
                                    </a>
                                </p>
                                <p class="control">
                                    <span class="icon">
                                        <i class="fas fa-download"></i>
                                    </span>
                                    <span>Download</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }    
}

export default Navbar;