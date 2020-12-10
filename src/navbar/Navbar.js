import React, {Component} from 'react';
import CoolButton from '../coolbutton/CoolButton.js';


class Navbar extends Component {
    render () {
        return (
            <nav className="navbar is-transparent">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://bulma.io">
                        <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
                    </a>
                    <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>


                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="field is-grouped">
                            <CoolButton isSmall isDanger className="is-rounded my-class">Login</CoolButton>
                            <CoolButton isSmall isSuccess>Signup</CoolButton>  
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;