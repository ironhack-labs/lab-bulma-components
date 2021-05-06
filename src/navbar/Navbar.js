import React from 'react';
import 'bulma/css/bulma.css';
import CoolButton from "../coolbutton/CoolButton"
import './Navbar.css'

function Navbar(props){
    return(
        <div>
            <nav className='navbar' role='navigation' aria-label='main-navigation'>
                <div className='navbar-brand'> 
                    <a className='navbar-item' href='https://bulma.io'>
                        <img src='https://bulma.io/images/bulma-logo.png' width='112' height='28'/>
                    </a>

                    <a role='button' class='navbar-burger' aria-label='menu' aria-aria-expanded='false' data-target='navbarBasicExample'>
                        <span aria-hidden='true'></span>
                        <span aria-hidden='true'></span>
                        <span aria-hidden='true'></span>
                    </a>

                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <a className="navbar-item">
                            Home
                        </a>
                        <a className="navbar-item">
                            Documentation
                        </a>
                        <div className='navbar-item has-dropdown is-hoverable'>
                            <a className='navbar-link'>
                                More
                            </a>
                            <div className='navbar-dropdown'>
                                <a className='navbar-item'>
                                    About
                                </a>
                                <a className='navbar-item'>
                                    Jobs
                                </a>
                                <a className='navbar-item'>
                                    Contact
                                </a>
                                <hr className='navbar-divider'/>
                                <a className='navbar-item'>
                                    Report an issue
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='navbar-end'>
                    <div className='navbar-items'>
                        <div className='buttons'>
                            {/* <a className='button is-primary'>
                                <strong>Sign Up</strong>
                            </a>
                            <a className='button is-light'>
                                Log In
                            </a> */}
                            <CoolButton className="is-info">Login</CoolButton>
                            <CoolButton className="is-primary">Sign Up</CoolButton>
                        </div>
                    </div>
                </div>

            </nav>
        </div>
    );
}

export default Navbar;