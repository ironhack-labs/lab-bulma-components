import React from 'react';
import 'bulma/css/bulma.css';
import './Navbar.css';
import CoolButton from '../component/CoolButton';

function Navbar() {

    return (

        <nav className="navbar" role="navigation" aria-label="main-navigation">

            <div className="navbar-brand">
                
                <a className="navbar-item" href="https://bulma.io">
                    <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
                </a>

                <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>

            </div>

            <div id="navbarBasicExample" class="navbar-menu">
                
                <div className="navbar-start">
                    
                    <a className="navbar-item">
                        Home
      </a>
                </div>
            </div>

            <div className="navbar-end">
                <div className="navbar-item">
                    
                    <CoolButton 
                        class="button is-rounded my-class is-danger is-small"   
                        buttontext= "Login"
                    />

                    <CoolButton
                        class="button is-small is-success"
                        buttontext="Sign Up"
                    />
                     
                </div>

            </div>

        </nav>
    )
}


export default Navbar;
