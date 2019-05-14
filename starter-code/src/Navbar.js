import React, { Component } from 'react';
import { Navbar } from 'react-bulma-components/full';
import 'bulma/css/bulma.css';
// import { Link, Route } from 'react-router-dom';
import CoolButton from './CoolButton.js';
import Signup from './Signup';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

export default class Nav extends Component {
  render() {
    return (
      <div>
        <Navbar>
          <div className="navbar-start">
            <a className="navbar-item" href="https://bulma.io">
              <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
            </a>
            <a className="navbar-item" href="/">
              Home
            </a>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <CoolButton className="button is-rounded my-class is-danger is-normal" name="Signup" />
              <CoolButton className="button is-normal is-success" name="Login" />
            </div>
          </div>
        </Navbar>
      </div>
    );
  }
}
