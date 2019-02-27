import React from "react";
import CoolButton from "./CoolButton";
//import {Menu, Item, } from 'antd'

export default (e) => (
  //e.preventDefault()
  <div id="navbarExampleTransparentExample" className="navbar-menu">
    <div className="navbar-end">
          <a className="navbar-item" href="https://bulma.io/">
          Home
          </a>
          <div className="navbar-item has-dropdown is-hoverable">
          <a className="navbar-link" href="/">
            More info
          </a>
          <div className="navbar-dropdown is-boxed">
            <a className="navbar-item" href="/">
              Login
            </a>
            <a className="navbar-item" href="/">
              Signup
            </a>
            <CoolButton clase="button is-primary" content="Login" />
            <CoolButton clase="button is-info" content="Signup" />

          </div>
        </div>
    </div>
  </div>
);



