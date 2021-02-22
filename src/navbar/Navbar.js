import 'bulma/css/bulma.css';
import React from 'react';
import CoolButton from '../CoolButton/CoolButton';


const Brand = () => {
    return (
        <div className="navbar-brand">
            <a className="navbar-item" href="https://bulma.io">
                <img 
                    src="https://bulma.io/images/bulma-logo.png"
                    alt="Bulma: a modern CSS framework based on Flexbox"
                    width="112"
                    height="28" />
            </a>
                <div className="navbar-burger" data-target="navbarExampleTransparentExample">
            </div>
        </div>
    )
}

const Home = () => {
    return (
        <a className="navbar-item" href="/">
        Home
      </a>
    )
}

const Signup = () => {
    return (
        <div className="navbar-item">
            <p className="control">
            <CoolButton classes="button is-primary">Signup</CoolButton>
          </p>
        </div>
    );
}


const Login = () => {
    return (
        <div className="navbar-item">
            <p className="control">
            <CoolButton classes="button is-info">Login</CoolButton>
          </p>
        </div>
    );
}

function Navbar() {
    return (
        <nav className="navbar is-transparent">
            <Brand />
            <div className="navbar-start">
                <Home />
            </div>
            <div className="navbar-end">
                <Login />
                <Signup />
            </div>
        </nav>
    );
}

export default Navbar;