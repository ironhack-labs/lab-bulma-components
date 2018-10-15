import React, { Component } from "react";
// import NavBar from "bulma";
import "./App.css";
import NavBar from "./navbar.js";
import FormField from './formfield.js';
import Button from "./button.js";
import Signup from './signup.js';
import CoolButton from "./CoolButton.js";




class App extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <FormField label="Name" type="text" placeholder="e.g. Alex Smith"/>
                <FormField label="Name" type="email" placeholder="e.g. kevin.rabesaotra@gmail.com"/>
                <CoolButton isSmall isDanger myclass="is-rounded my-class" value="Button 1"/>
                <CoolButton isSmall isSuccess value="Button 2"/>
                <Signup/>
            </div>
        )
    }
}

export default App;