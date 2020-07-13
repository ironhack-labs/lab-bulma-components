
import React from "react";
import 'bulma/css/bulma.css';
import "./Navbar.css";
import CoolButton from '../coolbutton/CoolButton'


function Navbar() {
    return (   
        
        <div>
        <nav id="navbar" className="navbar is-transparent" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io">
                    <img src="https://bulma.io/images/bulma-logo.png" alt="logo" width="112" height="28" />
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div id="home" className="navbar-start">
                    <a href="/" >Home</a>

                </div>
            </div>
            <div className="navbar-end">
                <div className="navbar-item">
                    
                    <CoolButton type="submit" styleClass="button my-class is-info is-medium" text="Login"/>
                    
                </div>
                <div className="navbar-item">
                   
                    <CoolButton type="submit" styleClass="button my-class is-primary is-medium" text="Sign up"/>
                    
                </div>
            </div>
        </nav>
    </div>
);
}

export default Navbar;