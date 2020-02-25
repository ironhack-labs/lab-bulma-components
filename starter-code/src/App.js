import React, { Component } from "react";
// import "./App.css";
import Navbar from "./Navbar.js";
import FormField from "./FormField.js";
import CoolButton from "./CoolButton.js";
import 'bulma/css/bulma.css';
import Signup from "./Signup.js";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar></Navbar>
                <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
                <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
                <CoolButton className="button is-small is-danger is-rounded my-class">Button 1</CoolButton>
                <CoolButton className="button is-small is-success">Button 2</CoolButton>
                <Signup></Signup>

            </div>
        );
    }
}

export default App;