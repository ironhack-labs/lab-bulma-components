/* eslint-disable react/jsx-fragments */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-tag-spacing */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import CoolButton from './CoolButton';

class Navbar extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      signup: false,
    };
  }

  changeDisplay() {
    this.setState({
      signup: true,
    });
  }

  render() {
    return (
      <nav className="navbar is-light">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
          </a>
        </div>

        <div id="navbarExampleTransparentExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item" href="#home">
              Home
            </a>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link" href="https://bulma.io/documentation/overview/start/">
                Docs
              </a>
              <div className="navbar-dropdown is-boxed">
                <a className="navbar-item" href="https://bulma.io/documentation/overview/start/">
                  Overview
                </a>
                <a className="navbar-item" href="https://bulma.io/documentation/modifiers/syntax/">
                  Modifiers
                </a>
                <a className="navbar-item" href="https://bulma.io/documentation/columns/basics/">
                  Columns
                </a>
                <a className="navbar-item" href="https://bulma.io/documentation/layout/container/">
                  Layout
                </a>
                <a className="navbar-item" href="https://bulma.io/documentation/form/general/">
                  Form
                </a>
                <hr className="navbar-divider" />
                <a className="navbar-item" href="https://bulma.io/documentation/elements/box/">
                  Elements
                </a>
                <a className="navbar-item is-active" href="https://bulma.io/documentation/components/breadcrumb/">
                  Components
                </a>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control">
                  <a className={this.props.login} href="#login">
                    <span className="icon">
                      <i className="fas" />
                    </span>
                    <span className="nav-buttons">
                      Login
                    </span>
                  </a>
                </p>
                <p className="control">
                  <button onClick={() => (this.changeDisplay) && <CoolButton check={this.state.signup} />} className={this.props.signup} type="submit" /* href="#signup" */ >
                    <span className="icon">
                      <i className="fas" />
                    </span>
                    <span className="nav-buttons">
                    Signup
                    </span>
                  </button>
                </p>

              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
