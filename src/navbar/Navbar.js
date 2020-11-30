import React, {Fragment} from 'react';
import 'bulma/css/bulma.css';
import CoolButton from '../coolButton/CoolButton';




export default function Navbar() {
    return (
        <Fragment>              
            <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <a class="navbar-item" href="https://bulma.io">
                        <img src="https://bulma.io/images/bulma-logo.png" style={{width: "112", height:"28"}}></img>
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
                    </div>

                    <div class="navbar-end">
                        <div class="navbar-item">
                            <div class="buttons">
                            <CoolButton className="button is-primary" type="submit" title="Log in"/>           
                            <CoolButton className="button is-link" type="submit" title="Sign Up" />  
                            </div>
                        </div>
                    </div>
                </div>
               
            </nav>
            
        </Fragment>
    )
}