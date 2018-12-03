import React, { Component } from "react";
import Nav from "./components/nav/nav.js";
import "./components/nav/nav.css";

import FormField from "./components/formField/formField.js"
import CoolButton from "./components/coolButton/coolButton.js"
import SignUp from "./components/signup/signup.js"




class App extends Component {
    render() {
        return (
            <div className="App">

                <Nav></Nav>
                <FormField></FormField>
                <CoolButton></CoolButton>
                <SignUp></SignUp>
            </div>
        );
    }
}

export default App;