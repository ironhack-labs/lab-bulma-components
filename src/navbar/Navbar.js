import React from 'react';
import 'bulma/css/bulma.css';

const Brand = () => {
    return (
        <div className="navbar-brand">
            <a className="navbar-item" href="https://bulma.io">
                <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/>
            </a>

            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            </a>
        </div>
    )
}

const Home = () => {
    return (<a class="navbar-item">Home</a>)
}

const SignUp = () => {
    return (
        <a className="button is-primary">
            <strong>Sign up</strong>
        </a>
    );
}

const LogIn = () => {
    return ( <a class="button is-light"> Log in </a>)
}

const Navbar = () => {
    return (
        <nav className="navbar">
            <Brand/>
            <div class="navbar-start">
                <Home/>
            </div>
            <div className="navbar-end">
                <div className="navbar-item">
                    <div className="buttons">
                        <SignUp/>
                        <LogIn/>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar; 