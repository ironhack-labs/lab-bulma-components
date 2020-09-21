import React from 'react';
import 'bulma/css/bulma.css';
import CoolButton from './CoolButton';

export default function Navbar() {
    return (
<nav className="navbar is-transparent">
        <div className="navbar-brand">
          <a className="navbar-item">
            <img src="https://bulma.io/images/bulma-logo.png"></img>
          </a>
        </div>
        <div className="navbar-menu">
          <div className="navbar-start">
            {" "}
            <a className="navbar-item"> Home</a>
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <CoolButton isSuccess className=" my-class" btnName="Login" />
              <CoolButton isDanger className=" my-class" btnName="Signup" />
            </div>
          </div>
        </div>
      </nav>
    )
}
