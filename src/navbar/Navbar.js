import React from 'react'
import CoolButton from '../CoolButton/CoolButton'
import { Link } from "react-router-dom";

const Navbar = () =>{
    return (
    <nav className="navbar is-transparent">
        <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width={112} height={28} />
        </a>
        <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
            <span />
            <span />
            <span />
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
            <Link to="/"><CoolButton classes={['isSmall','isInfo','is-rounded','my-class']} number="Login"></CoolButton></Link>
            <Link to="/signup"><CoolButton classes={['isSmall','isPrimary','is-rounded','my-class']} number="SignUp"></CoolButton></Link>
            </div>
            </div>
        </div>
        </div>
    </nav>
    );
}

export default Navbar;