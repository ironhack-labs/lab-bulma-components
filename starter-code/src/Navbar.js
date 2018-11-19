import React, {Component} from 'react'
import CoolButton from "./CoolButton";

class Navbar extends Component {
    render(){
        return (
            <div>
                <nav className="navbar" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <a className="navbar-item" href="https://bulma.io">
                            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/>
                        </a>
                        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false"
                           data-target="navbarBasicExample">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>
                    <div id="navbarBasicExample" className="navbar-menu">
                        <div className="navbar-start">
                            <a className="navbar-item">
                                Home
                            </a>
                        </div>
                    </div>
                    <div class="navbar-end">
                        <div class="navbar-item">
                            <div class="buttons">
                                <CoolButton className="button is-primary">
                                    <strong>Sign up</strong>
                                </CoolButton>
                                <CoolButton className="button is-light">
                                    Log in
                                </CoolButton>
                            </div>
                        </div>
                    </div>

    </nav>
    </div>
        )
    }
}


export default Navbar;