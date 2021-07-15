import React from 'react';
import CoolButton from '../coolbutton/CoolButton.js'
import 'bulma/css/bulma.css';

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar is-transparent">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://bulma.io">
                        <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"></img>
                    </a> 
                </div>                      
                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <a className="navbar-item">
                            Home
                        </a>
                    </div>
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <CoolButton className='button is-info' text='Log in'/>
                                <CoolButton className='button is-primary' text='Sign up'/>                                    
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        );
    };
};

export default Navbar;