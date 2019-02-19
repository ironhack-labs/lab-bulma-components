import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
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
            <div className="navbar-start">
            <a className="navbar-item">
                Home
            </a>

            <a className="navbar-item">
                Documentation
            </a>

            <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">
                More
                </a>

                <div className="navbar-dropdown">
                <a className="navbar-item">
                    About
                </a>
                <a className="navbar-item">
                    Jobs
                </a>
                <a className="navbar-item">
                    Contact
                </a>
                <hr className="navbar-divider"></hr>
                <a className="navbar-item">
                    Report an issue
                </a>
                </div>
            </div>
            </div>

            <div className="navbar-end">
            <div className="navbar-item">
                <div className="buttons">
                <button className="button is-rounded my-class is-danger is-small">Sign up</button>
        <button className="button is-small is-success">Login</button>
                </div>
            </div>
            </div>
        </div>
        </nav>
        <div class="field">
        <label className="label">Name</label>
        <div className="control">
            <input className="input" type="text" placeholder="e.g Alex Smith"/>
        </div>
        </div>
        <div className="field">
        <label className="label">Email</label>
        <div className="control">
            <input className="input" type="email" placeholder="e.g. alexsmith@gmail.com"/>
        </div>
        </div>
        <div class="field">
        <label className="label">Password</label>
        <div className="control">
            <input className="input" type="text" placeholder="Your password"/>
        </div>
        </div>
        <button className="button is-small is-success">Signup</button>
        <h1> Hello Ironhackers! </h1>
      </div>
    );
  }
}

export default App;