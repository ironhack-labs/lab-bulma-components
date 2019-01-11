import React, { Component } from "react";
import CoolButton from "../CoolButton";
import Signup from "../Signup";
import classNames from 'classnames/bind'

let cx = classNames.bind({isActive:"is-active"});


export default class NavMenu extends Component {

  render() {
    let className = cx("navbar-menu",this.props)

    return (
      <div id="navbarExampleTransparentExample" className={className}>
      <div className="navbar-start">
        <a className="navbar-item" href="/">
          Home
        </a>
      </div>

      <div className="navbar-end">
        <div className="navbar-item">
          <div className="field is-grouped">
            <p className="control">
              <CoolButton isInfo>Login</CoolButton>
            </p>
            <p className="control">
              <CoolButton isPrimary>Signup</CoolButton>
            </p>
          </div>
        </div>
      </div>
    </div>
    
    );
  }
}
