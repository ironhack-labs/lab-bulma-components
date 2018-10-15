import React, { Component } from "react";
// import CoolButton from "../components/CoolButton";
// import FormField from "../components/FormField";
import Message from "../components/Message";
import Signup from "../components/Signup";
import "./App.css";

class App extends Component {

    render() {
        return (
<section>
    <nav className="navbar is-transparent">
    <div className="navbar-brand">
        <a className="navbar-item" href="#">
        <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
        </a>
    </div>
    <div id="navbarExampleTransparentExample" className="navbar-menu">
        <div className="navbar-start">
        <a className="navbar-item" href="#">
            Home
        </a>
        </div>
    </div>
    </nav>
    <div className="navbar-end">
    <div className="navbar-item">
        <div className="buttons">
          <a className="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a className="button is-light">
            Log in
          </a>
        </div>
      </div>
 
    </div>
    <Signup />
    <Message isInfo title="Hello World" />
 </section>
        );
    }
}



export default App;