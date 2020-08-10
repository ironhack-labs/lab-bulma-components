import React from 'react';
import 'bulma/css/bulma.css';
import './Navbar.css';
import CoolButton from '../Button/CoolButton';


export const Navbar = () => {
    return (
        <nav className="navbar is-transparent">
            <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io">
                    <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
                </a>
                <a className="navbar-item" href="https://bulma.io/">
                    Home
            </a>
            </div>

            <div id="navbarExampleTransparentExample" className="navbar-menu is-active">


                <div className="navbar-end is-active">
                    <div className="navbar-item">
                        <div className="field is-grouped">

                            <CoolButton isSmall isDanger className=' is-rounded' children='Login' />
                            <CoolButton isSmall isSuccess children='SignUp' />



                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;