import React from 'react';
import CoolButton from '../coolbutton/CoolButton';
import 'bulma/css/bulma.min.css';


class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar is-transparent">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://bulma.io">
                    <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
                    </a>
                </div>
    
                <div id="navbarExampleTransparentExample" class="navbar-menu">
                    <div className="navbar-start">
                        <a className="navbar-item" href="https://bulma.io/">
                        Home
                        </a>
                    </div>
    
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="field is-grouped">
                                <p className="control">
                                    <CoolButton className="button is-rounded my-class is-danger is-small">Log In</CoolButton>
                                </p>
                                <p className="control">
                                    <CoolButton className="button is-small is-success">Sign Up</CoolButton>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }

  };


export default Navbar;