import React, { Component } from "react"
import 'bulma/css/bulma.css'


class NavBar extends Component{
    render (){

        return (
            
            <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <a class="navbar-item" href="https://bulma.io">
                        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/>
                    </a>
            
                    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
            
                <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-start">
                        <a class="navbar-item">
                        Home
                        </a>
                
                        <a class="navbar-item">
                        Documentation
                        </a>
                
                        <div class="navbar-item has-dropdown is-hoverable">
                            <a class="navbar-link">
                                More
                            </a>
                    
                            <div class="navbar-dropdown">
                                <a class="navbar-item">
                                About
                                </a>
                                <a class="navbar-item">
                                Jobs
                                </a>
                                <a class="navbar-item">
                                Contact
                                </a>
                                <hr class="navbar-divider"/>
                                <a class="navbar-item">
                                Report an issue
                                </a>
                            </div>
                        </div>
                    </div>
                
                    <div class="navbar-end">
                        <div class="navbar-item">
                            <div class="buttons">
                                <a class="button is-primary">
                                <strong>Sign up</strong>
                                </a>
                                <a class="button is-light">
                                Log in
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

        )
    }

}



export default NavBar