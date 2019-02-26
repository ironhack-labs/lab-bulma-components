import React, { Component } from 'react';
import Logo from './Logo';
import LinkTo from './LinkTo';
import Button from './Button';

export default function Navbar() {
    return (
      <nav className="navbar is-transparent">
        <Logo />
        <div id="navbarExampleTransparentExample" className="navbar-menu">
          <LinkTo name="Home" link="https://bulma.io/"/>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field is-grouped">
                <Button name="Login" className="is-info"/>
                <Button name="Signup" className="is-primary"/>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
}