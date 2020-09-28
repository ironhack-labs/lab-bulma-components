import React from 'react';
import 'bulma/css/bulma.css';

import CoolButton from './CoolButton'

const NavBar = () => {

    return (

        <nav className="navbar" role="navigation" aria-label="main navigation">

            <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io">
                    <img src="https://bulma.io/images/bulma-logo.png" alt='logo' width="112" height="28" />
                </a>

                <a href='https://bulma.io' role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <a href='https://bulma.io' className="navbar-item">
                        Home
                    </a>





                    <div className="navbar-dropdown">

                        <hr className="navbar-divider" />

                    </div>
                </div>
            </div>

            <div className="navbar-end">
                <div className="navbar-item">
                    <div className="buttons">
                        {/* <a href='https://bulma.io' className={props.className}>
                            <strong>Sign up</strong>
                        </a>
                        <a href='https://bulma.io' className="button is-light">
                            Log in</a> */}
                        <CoolButton text='Sign up' isSmall isDanger className="is-rounded my-class"></CoolButton>
                        <CoolButton text='Log in' isSmall isSuccess></CoolButton>
                    </div>
                </div>
            </div>

        </nav >

    )
}
export default NavBar