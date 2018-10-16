import React, { Component } from "react";
// import CoolButton from "../components/CoolButton";
// import FormField from "../components/FormField";
import Message from "../components/Message";
import Signup from "../components/Signup";
import "./App.css";

class App extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            data1 : {
                title: "Hello World",
                msg: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
                importantMsg: "Pellentesque risus mi",
            }
        }
    }



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
    <Message isInfo pack={this.state.data1}>
     
        </Message>
 </section>
        );
    }
}



export default App;