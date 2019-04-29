import React from 'react';
import Button from "./Button.js";
import FormField from './FormField.js';
import Container from './Container.js';
import CoolButton from './CoolButton';

const Navbar = () =>{

    return (
        <div className="box">
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io">
                <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/>
                </a>

                <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-end">
                <div className="navbar-item">
                    <div className="buttons">
                    <Button name="Sign Up" type="is-primary"></Button>
                    <Button name="Log in" type="is-light"></Button>
                    </div>
                </div>
                </div>
            </div>
        </nav>
        <Container>
            <FormField name="Name" placeholder="Type in your name" type="text"/>
            <FormField name="Email" placeholder="Enter your email professorcti@gmail.com" type="email"/>
            <CoolButton isSmall isDanger isRounded className="is-rounded my-class">Send Form</CoolButton>
        </Container>

        </div>
    )
}


export default Navbar;

