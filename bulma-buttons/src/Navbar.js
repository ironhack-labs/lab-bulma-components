import React, { Component } from 'react';
// import logo from './logo.svg';
import App from './App';
import Button from './Button';
import './Navbar.css';

const Navbar = (props) => {

    return (
      <nav className="navbar navbar-expand-md navbar-light">
        <div className="container-fluid" >
          <a className="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
          </a>
      
          <div className="justify-content-end" id="navbarNavAltMarkup">
              <div className="navbar-nav">         
                  <Button classType="btn btn-primary nav-item nav-link ml-1"  onClick={props.onClick} text="Login" />
                  <Button classType="btn btn-success nav-item nav-link ml-1" text="Signup" onClick={props.onClick} />
              </div>
          </div>
        </div>
      </nav>
    );
}

export default Navbar;
