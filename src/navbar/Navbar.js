import React from 'react';
import './Navbar.css';
import CoolButton from '../coolbutton/CoolButton'
import 'bulma/css/bulma.css';


const Navbar = (props) => {
   
    return(
        <div className="Navbar">
            <nav className="navbar is-transparent">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://bulma.io">
                        <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
                    </a>
                    <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
                       
                    </div>
                </div>

                <div id="navbarExampleTransparentExample" className="navbar-menu">
                    <div className="navbar-start">
                        <a className="navbar-item" href="https://bulma.io/">
                            Home
                        </a>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="field is-grouped">
                            <p className="control">
                                <CoolButton isDanger text="Login"/>
                            </p>
                            <p className="control">
                                <CoolButton isPrimary text="SignUp"/>
                            </p>
                            </div>
                    </div>
                    </div>
                </div>
            </nav>            
        </div>
    )
}

export default Navbar;