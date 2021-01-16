import React from 'react';
import 'bulma/css/bulma.css';
import './Navbar.css'

class Navbar extends React.Component{
    render(){
        return(
            <nav class="navbar is-light" role="navigation" aria-label="main navigation">
                
                <div class="navbar-brand">
                <a class="navbar-item" href="https://bulma.io">
                    <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: Free, open source, and modern CSS framework based on Flexbox" width="112" height="28" />
                </a>
                
                </div>
                <div class="navbar-menu navbar-item">
                <a class="navbar-item" href="/">HOME</a>
                <div class="navbar-end">
                <button class="button is-rounded my-class is-danger is-small m-1">Login</button>
                <button class="button is-rounded my-class is-success is-small m-1">SignUp</button>
                </div>
                </div>
                
            </nav>
        )
    }
}


export {Navbar};