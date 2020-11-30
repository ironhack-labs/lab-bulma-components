import React from 'react';
import 'bulma/css/bulma.css';
import '../Navbar/Navbar.css';
import CoolButton from '../CoolButton/CoolButton'

const Navbar = props => {
    return (
        
    <nav className="navbar is-transparent is-fixed-top">

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

        <div id="navbarExampleTransparentExample" className="navbar-menu">
            <div className="navbar-start">
                <a className="navbar-item" href="https://bulma.io/">
                    Home
                </a>
            </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="field is-grouped">
                            <p className='log'>
                                <CoolButton className="button is-rounded my-class is-danger">Log in</CoolButton>
                            </p>
                            <p className='sign'>
                                <CoolButton className="button my-class is-success ">Sign up</CoolButton>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
</nav>
                
    )    
}


export default Navbar;